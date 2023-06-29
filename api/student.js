const express = require("express");
const router = express.Router();
const { Campus, Student } = require("../db/models");

// root is localhost:3000/api/student
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

module.exports = router;
