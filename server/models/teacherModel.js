const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teacherSchema = new Schema ({
  teacherName: {type: String, required: true},
  time: {type:Number, required:true}
});



module.exports = mongoose.model('student', studentSchema);
