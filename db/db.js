const { Sequelize } = require("sequelize");

const db = new Sequelize(process.env.POSTGRES_URL + "?sslmode=require");

module.exports = db;
