const { DataTypes } = require("sequelize");
const db = require("../db");

const Campus = db.define("Campus", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue:
      "https://cdn.imgbin.com/0/6/8/imgbin-university-school-college-computer-icons-student-school-NCzwUsayDCvcspJ9EXtjwXP3U.jpg",
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: "Default description.",
  },
});

module.exports = Campus;
