const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//teacherupdate
const teacherSchema = new Schema ({
  teacherName: {type: String, required: true},
  time: {type:Number, required:true},
  studentName: {type: String, required: true}
});



module.exports = mongoose.model('teacher', teacherSchema);
