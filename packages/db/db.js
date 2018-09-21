import mongoose from "mongoose";

const password = process.env.TIMEFILTER_MONGO_PASSWORD;
const user = process.env.TIMEFILTER_MONGO_USER;
const db = process.env.TIMEFILTER_MONGO_DB;
const host = process.env.TIMEFILTER_MONGO_HOST;
const port = process.env.TIMEFILTER_MONGO_PORT;

mongoose.connect(`mongodb://${user}:${password}@${host}:${port}/${db}`);

const connection = mongoose.connection;
