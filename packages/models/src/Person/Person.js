const mongoose = require("mongoose");

const personSchema = new mongoose.Schema(
  {
    name: String,
    lat: Number,
    long: Number
  },
  { collection: "people" }
);
const Person = mongoose.model("Person", personSchema);

module.exports = Person;
