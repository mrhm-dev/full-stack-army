const { Schema, model } = require('mongoose');

const studentAttendanceSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		adminAttendance: {
			type: Schema.Types.ObjectId,
			ref: 'AdminAttendance',
			required: true,
		},
	},
	{ timestamps: true }
);

const StudentAttendance = model('StudentAttendance', studentAttendanceSchema);
module.exports = StudentAttendance;
