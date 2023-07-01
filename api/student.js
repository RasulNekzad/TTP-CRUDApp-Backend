const express = require("express");
const router = express.Router();
const { Campus, Student } = require("../db/models");

var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

// root is localhost:3000/api/student
// get all students
router.get("/", async (req, res, next) => {
  try {
    const allStudents = await Student.findAll();
    allStudents
      ? res.status(200).json(allStudents)
      : res.status(404).send("Student List Not Found");
  } catch (error) {
    next(error);
  }
});

// get student by id
router.get("/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findByPk(studentId);
    const campus = await Campus.findByPk(student.CampusId);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      student: student,
      campus: campus,
    });
  } catch (error) {
    console.error("Error retrieving student:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// add new student
router.post("/", jsonParser, async (req, res) => {
  try {
    const { firstName, lastName, email, imageUrl, gpa } = req.body;

    const addedStudent = await Student.create({
      firstName,
      lastName,
      email,
      imageUrl,
      gpa,
    });
    addedStudent
      ? res.status(200).json(addedStudent)
      : res.status(400).send("Student could not be added");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to add student" });
  }
});

// delete student by id
router.delete("/:id", async (req, res, next) => {
  try {
    const DeleteStudent = await Student.destroy({
      where: { id: req.params.id },
    });
    DeleteStudent
      ? res.status(200).send("Successfully removed student")
      : res.status(404).send("Student not found.");
  } catch (error) {
    next(error);
  }
});

// update student by id
router.put("/:id", jsonParser, async (req, res, next) => {
  try {
    console.log(req.query.id);
    const { firstName, lastName, email, imageUrl, gpa, CampusId } = req.body;
    const updatedStudent = await Student.update(
      {
        firstName,
        lastName,
        email,
        imageUrl,
        gpa,
        CampusId,
      },
      {
        where: { id: req.params.id },
        returning: true,
      }
    );
    updatedStudent
      ? res.status(200).json({ newData: updatedStudent[1][0].dataValues })
      : res.status(404).send("Student could not be found.");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
