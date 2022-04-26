const profesorController = {};
const Profesor = require("../models/Profesor");

//Create Profesor
profesorController.create = async (req, res) => {
  const newProfesor = await new Profesor(req.body);
  newProfesor.save();
  res.status(200).json({ status: true, message: "New added profesor" });
};

//Get all Profesors
profesorController.getAll = async (req, res) => {
  let resultado = await Profesor.find();
  res.status(200).json({ status: true, resultado });
};

//Get Profesor by Identification
profesorController.getByIdent = async (req, res) => {
  let resultado = await Profesor.findOne({ ident: req.params.ident });
  res.status(200).json({ status: true, resultado });
};

//Delete Profesor by Identification
profesorController.deleteByIdent = async (req, res) => {
  await Profesor.findOneAndDelete({ ident: req.params.ident });
  res.status(200).json({ status: true, message: "Successfully deleted" });
};

profesorController.updateByIdent = async (req, res) => {
  await Profesor.findOneAndUpdate({ ident: req.params.ident }, req.body);
  res.status(200).json({ status: true, message: "Successfully updated" });
};

module.exports = profesorController;
