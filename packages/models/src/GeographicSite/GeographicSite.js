const mongoose = require("mongoose");

const geographicSiteSchema = new mongoose.Schema(
  {
    name: String,
    location: {
      lat: Number,
      long: Number
    }
  },
  { collection: "geo.sites" }
);
const GeographicSite = mongoose.model("Geo.Site", geographicSiteSchema);

module.exports = GeographicSite;
