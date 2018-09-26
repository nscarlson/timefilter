import { Event } from "models";

const event = async (object, args, context) => Event.findOne();

export default event;
