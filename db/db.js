const { Sequelize } = require("sequelize");
const { name } = require("../package.json");
// name = ttp-crudapp-backend

const db = new Sequelize(`postgres://localhost:5432/${name}`, {
  logging: false,
});

module.exports = db;
