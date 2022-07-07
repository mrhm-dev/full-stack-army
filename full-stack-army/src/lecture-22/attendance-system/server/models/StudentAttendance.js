const { Schema, model } = require('mongoose');

const studentAttendanceSchema = new Schema({
	createdAt: Date,
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	adminAttendance: {
		type: Schema.Types.ObjectId,
		ref: 'AdminAttendance',
	},
});

const StudentAttendance = model('StudentAttendance', studentAttendanceSchema);

module.exports = StudentAttendance;
