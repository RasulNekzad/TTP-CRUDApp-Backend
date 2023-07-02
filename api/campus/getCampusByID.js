const express = require("express");
const router = express.Router();
const { Campus, Student } = require("../db/models");

router.get("/:id", async (req, res) => {
  try {
    const campusId = req.params.id;
    const campus = await Campus.findByPk(campusId);
    const students = await Student.findAll({
      include: [{ model: Campus, where: { id: campusId } }],
    });

    if (!campus) {
      return res.status(404).json({ message: "Campus not found" });
    }

    res.status(200).json({
      campus: campus,
      students: students,
    });
  } catch (error) {
    console.error("Error retrieving campus:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
