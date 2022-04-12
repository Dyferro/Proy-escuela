const profesorController = {};
const Profesor = require("../models/Profesor");

//Create Profesor
profesorController.create = (profesor) => {
  const newProfesor = new Profesor(profesor);
  newProfesor.save();
  return "New added profesor";
};

module.exports = profesorController;
