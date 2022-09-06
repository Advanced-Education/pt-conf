const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema ({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  studentId: {type:String,required:true}
});



module.exports = mongoose.model('student', studentSchema);
