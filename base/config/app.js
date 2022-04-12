//Imports
const express = require("express");
const bodyparser = require("body-parser");

require("../../config.env");

//Inicializations
const app = express();
app.set("port", process.env.PORT || 3000);

//Uses
app.use(bodyparser.json());

app.use("/api/proy-escuela/v1", require("../routes/routes"));

//Exports
module.exports = app;
