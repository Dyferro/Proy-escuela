const { Schema, model } = require("mongoose");

const ProfesorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    require: true,
  },
  ident: {
    type: Number,
    require: true,
    unique: true,
  },
});

module.exports = mongoose.model("Profesor", ProfesorSchema);
