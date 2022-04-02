const { addMinutes, isAfter } = require('date-fns');
const AdminAttendance = require('../models/AdminAttendance');
const error = require('../utils/error');

const getEnable = async (_req, res, next) => {
	try {
		const running = await AdminAttendance.findOne({ status: 'RUNNING' });
		if (running) {
			throw error('Already Running', 400);
		}

		const attendance = new AdminAttendance({});
		await attendance.save();
		return res.status(201).json({ message: 'Success', attendance });
	} catch (e) {
		next(e);
	}
};

const getStatus = async (_req, res, next) => {
	try {
		const running = await AdminAttendance.findOne({ status: 'RUNNING' });
		if (!running) {
			throw error('Not Running', 400);
		}

		const started = addMinutes(
			new Date(running.createdAt),
			running.timeLimit
		);
		if (isAfter(new Date(), started)) {
			running.status = 'COMPLETED';
			await running.save();
		}

		return res.status(200).json(running);
	} catch (e) {
		next(e);
	}
};

const getDisable = async (_req, res, next) => {
	try {
		const running = await AdminAttendance.findOne({ status: 'RUNNING' });
		if (!running) {
			throw error('Not Running', 400);
		}

		running.status = 'COMPLETED';
		await running.save();

		return res.status(200).json(running);
	} catch (e) {
		next(e);
	}
};

module.exports = {
	getEnable,
	getDisable,
	getStatus,
};
