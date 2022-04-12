//imports
const mongoose = require("mongoose");
require("../../config.env");

//Database conection
mongoose
  .connect(process.env.URL_DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log("Database is connected"))
  .catch((err) => console.log(err));
