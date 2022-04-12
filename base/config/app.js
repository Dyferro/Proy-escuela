//Imports
const express = require("express");
const bodyparser = require("body-parser");
const routes = require("../routes/routes");

require("../../config.env");

//Inicializations
const app = express();
app.set("port", process.env.PORT || 3000);

//Uses
app.use(bodyparser.json());
app.use("/v1/proy-escuela", routes);

//Exports
module.exports = app;
