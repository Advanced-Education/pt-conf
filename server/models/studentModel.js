const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scheduleSchema = new Schema ({
  studentName: {type: String, required: true},
  teacherName: {type: String, required: true},
  id: {type: Number, required: true},
  availableTime: {type: Number, required: true}
});


module.exports = mongoose.model('schedule', scheduleSchema);
