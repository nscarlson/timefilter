const eventSchema = new mongoose.Schema({
  intervalBegin: Number,
  intervalEnd: Number
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
