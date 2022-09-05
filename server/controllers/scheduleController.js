const { isValidObjectId } = require("mongoose");
//const { ParentUse } = require("./models/parentModel.js");
const Student = require("../models/studentModel.js");
const Teacher = require("../models/teacherModel");

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

  async parentSignup(req, res, next) {},

  async parentLogin(req, res, next) {},
};

module.exports = scheduleController;
