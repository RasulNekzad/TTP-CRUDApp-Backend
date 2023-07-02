const express = require("express");
const router = express.Router();
const { Campus } = require("../db/models");

var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

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

module.exports = router;
