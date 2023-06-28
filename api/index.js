const express = require("express");
const router = express.Router();

// mounting
router.use("/student", require("./student"));
router.use("/campus", require("./campus"));

// 404 error handling
router.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
