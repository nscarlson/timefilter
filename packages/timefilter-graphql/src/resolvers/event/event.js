const event = async (object, args, context) => {
  const result = await Event.find();

  return result;
};

export default event;
