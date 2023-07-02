const express = require("express");
const router = express.Router();
const { Campus } = require("../db/models");

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
