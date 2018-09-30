import { City } from "models";

const city = async (object, args, context) => {
  const result = await City.findOne({
    _id: args.id
  });

  return result;
};

export default city;
