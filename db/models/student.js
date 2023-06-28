const { DataTypes } = require("sequelize");
const db = require("../db");

const Student = db.define("Student", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "default_image_url.jpg",
  },
  gpa: {
    type: DataTypes.DECIMAL(3, 1),
    allowNull: false,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

module.exports = Student;
