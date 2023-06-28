const express = require("express");
const router = express.Router();
const { Student } = require("../db/models");

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

module.exports = router;
