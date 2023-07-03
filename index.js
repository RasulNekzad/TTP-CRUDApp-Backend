require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");
const PORT = 8080;

app.use(cors());
app.use("/api", require("./api"));
const syncDB = () => db.sync({ force: false });

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json({
    message:
      "Rasul Nekzad's CRUD app backend. Enjoy exploring! Made with ❤️ in NYC.",
  });
});

syncDB();

module.exports = app;
