const express = require("express");
const router = express.Router();
const { Campus, Student } = require("../db/models");

var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

// root is localhost:3000/api/campus
// get all campuses
router.get("/", async (req, res, next) => {
  try {
    const allCampuses = await Campus.findAll();
    allCampuses
      ? res.status(200).json(allCampuses)
      : res.status(404).send("Campus List Not Found");
  } catch (error) {
    next(error);
  }
});

// get campus by id
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

// add new campus
router.post("/", jsonParser, async (req, res) => {
  try {
    const { name, imageUrl, address, description } = req.body;

    const addedCampus = await Campus.create({
      name,
      imageUrl,
      address,
      description,
    });
    addedCampus
      ? res.status(200).json(addedCampus)
      : res.status(404).send("Campus could not be added");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to add campus" });
  }
});

// delete campus by id
router.delete("/:id", async (req, res, next) => {
  try {
    const DeleteCampus = await Campus.destroy({
      where: { id: req.params.id },
    });
    DeleteCampus
      ? res.status(200).send("Successfully removed campus")
      : res.status(404).send("Campus not found.");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
