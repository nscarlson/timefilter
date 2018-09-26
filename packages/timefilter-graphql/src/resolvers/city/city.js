import { City } from "models";

const city = async (object, args, context) => {
  const result = await City.find();
  console.log("result:", result);
  return result;
};

export default city;
