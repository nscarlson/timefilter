import { City } from "models";

const createCity = async (root, { input }, context) => {
  try {
    const newCity = new City({
      ...input
    });

    const result = await newCity.save();

    return result;
  } catch (err) {
    throw err;
  }
};

export default createCity;
