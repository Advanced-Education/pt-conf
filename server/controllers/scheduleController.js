const { isValidObjectId } = require("mongoose");
const { ParentUser, validate } = require("../models/parentModel.js");
const Student = require("../models/studentModel.js");
const Teacher = require("../models/teacherModel");
const bcrypt = require("bcrypt");
//validate function using Joi
const Joi = require("joi");

const scheduleController = {
  idAuthentication(req, res, next) {},

  async addTeacher(req, res, next) {
    try {
      const newTeacher = await new Teacher(req.body).save();
      res.status(201).send(newTeacher);
    } catch (error) {
      res.status(400).send({ message: "Internal Server Error" });
    }
  },

  async getTeachers(req, res, next) {
    try {
      const teachers = await Teacher.find({});
      res.status(201).send(teachers);
    } catch (error) {
      res.status(400).send({ message: "Internal Server Error" });
    }
  },

  async addStudent(req, res, next) {
    try {
      const newStudent = await new Student(req.body).save();
      res.status(201).send(newStudent);
    } catch (error) {
      res.status(400).send({ message: "Internal Server Error" });
    }
  },

  async getStudents(req, res, next) {
    try {
      const students = await Student.find({}); //finds all students
      res.status(201).send(students);
    } catch (error) {
      res.status(400).send({ message: "Internal Server Error" });
    }
  },

  async parentSignup(req, res, next) {
    try {
      const { error } = validate(req.body);
      if (error) {
        return res.status(400).send({ message: error.details[0].message });
      }
      const user = await ParentUser.findOne({ email: req.body.email });
      if (!user)
        return res
          .status(401)
          .send({ message: "Invalid Email or Password Fine one" });

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword)
        return res.status(401).send({ message: "Invalid Email or Password" });

      const token = user.generateAuthToken();
      res.status(200).send({ data: token, message: "Logged in successfully" });
    } catch (error) {
      res.status(500).send({ message: "Internal Servor Error" });
    }
  },

  async parentLogin(req, res, next) {
    try {
      const { error } = validate(req.body); //this is from the parents validate joi which downloaded from joi library
      if (error)
        //if error return the 400 below with the first value of details which is message in this case
        return res.status(400).send({ message: error.details[0].message });

      const parents = await ParentUser.findOne({ email: req.body.email }); //we find first user. see mongodb docs
      if (parents)
        return res
          .status(409)
          .send({ message: "Parent with that email address already exists" });

      const salt = await bcrypt.genSalt(Number(process.env.SALT)); //hashing password via encrypting
      const hashPassword = await bcrypt.hash(req.body.password, salt); //you are sending the email and password via req.body.email && req.body.password. We are hasing passowrd received from req.body with salt.

      await new ParentUser({ ...req.body, password: hashPassword }).save(); // destructuring the ...req.body and matching the USER SCHEMA password and converting it into haspassword/encrypted. It is being destructured to reqrite the password.
      res.status(201).send({ message: "User created successfully" });
    } catch (error) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
};

module.exports = scheduleController;
