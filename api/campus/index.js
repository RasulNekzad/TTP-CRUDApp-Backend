const router = require("express").Router();

router.use("/campus/getAllCampuses", require("./getAllCampuses"));
router.use("/getCampusByID", require("./getCampusByID"));
router.use("/addCampus", require("./addCampus"));
router.use("/deleteCampusByID", require("./deleteCampusByID"));

router.module.exports = router;
