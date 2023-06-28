const Student = require("./student");
const Campus = require("./campus");

// Associations
Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  Student,
  Campus,
};
