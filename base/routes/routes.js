//Importaciones
const express = require("express");
const profesorController = require("../controllers/profesor");
const app = express();

//Adicionar Profesor
app.post("/profesor/create", profesorController.create);

//Obtener Listado de Profesores
app.get("/profesor/list", profesorController.getAll);

//Obtener Profesor segun identificacion
app.get("/profesor/get/:ident", profesorController.getByIdent);

//Eliminar
app.delete("/profesor/remove/:ident", profesorController.deleteByIdent);

module.exports = app;
