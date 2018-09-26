const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    name: String,
    lat: Number,
    long: Number
  },
  { collection: "geo.cities" }
);
const City = mongoose.model("Geo.City", citySchema);

module.exports = City;
