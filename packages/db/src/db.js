const mongoose = require("mongoose");

const password = process.env.TIMEFILTER_MONGO_PASSWORD;
const user = process.env.TIMEFILTER_MONGO_USER;
const database = process.env.TIMEFILTER_MONGO_DB;
const host = process.env.TIMEFILTER_MONGO_HOST;
const port = process.env.TIMEFILTER_MONGO_PORT;

const init = () => {
  // use global Promise in mongoose
  mongoose.Promise = global.Promise;

  mongoose.connect(`mongodb://${user}:${password}@${host}:${port}/${database}`);

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    // we're connected!
    console.log("Connected to mongoDB");
  });
};

module.exports = {
  init
};
