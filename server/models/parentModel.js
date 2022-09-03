const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require('joi');

const parentSchema = new Schema ({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type:String, required:true},
  StudentId: {type:String, required:true}
});




module.exports = mongoose.model('parent', parentSchema);
