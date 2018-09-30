import { Person } from "models";

const person = async (object, args, context) => {
  const result = await Person.findOne({
    _id: args.id
  });

  return result;
};

export default person;
