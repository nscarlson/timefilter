const mongoose = require("mongoose");

const Event = mongoose.model("Event", {
  intervalBegin: Number,
  intervalEnd: Number
});

module.exports = Event;
