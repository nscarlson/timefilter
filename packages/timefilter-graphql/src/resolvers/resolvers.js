import city from "./city";
import event from "./event";

const resolvers = {
  Query: {
    cities: city,
    event
  }
};

export default resolvers;
