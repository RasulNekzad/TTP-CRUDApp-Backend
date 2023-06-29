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
    defaultValue:
      "https://img.favpng.com/4/7/17/mountview-academy-of-theatre-arts-silhouette-female-png-favpng-w38HZe4aWEJmpHFtsLXCc7Aqu_t.jpg",
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
