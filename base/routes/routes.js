//Importaciones
const express = require("express");
const Profesor = require("../models/Profesor");
const profesorController = require("../controllers/profesor");
const app = express();

//Adicionar Profesor
app.post("/profesor/create", async (req, res) => {
  const data = await new Profesor(req.body);
  let respuesta = profesorController.create(data);
  res.status(200).json({ status: true, message: respuesta });
});

module.exports = app;
