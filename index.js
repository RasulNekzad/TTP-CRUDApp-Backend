const express = require("express");
const app = express();
const db = require("./db");
const PORT = 8080;

app.use("/api", require("./api"));
const syncDB = () => db.sync({ force: true });

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

syncDB();

module.exports = app;
