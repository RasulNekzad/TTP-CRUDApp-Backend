const { Sequelize } = require("sequelize");
const pg = require("pg");

const db = new Sequelize(process.env.POSTGRES_URL + "?sslmode=require", {
  dialectModule: pg,
});

module.exports = db;
