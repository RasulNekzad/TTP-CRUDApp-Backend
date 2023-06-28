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
    defaultValue: "default_image_url.jpg",
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
  },
});

module.exports = Campus;
