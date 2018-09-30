import { Person } from "models";

const createPerson = async (root, { input }, context) => {
  try {
    const newPerson = new Person({
      ...input
    });

    const result = await newPerson.save();

    return result;
  } catch (err) {
    throw err;
  }
};

export default createPerson;
