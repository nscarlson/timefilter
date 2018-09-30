import { ApolloServer } from "apollo-server";
import db from "db";

console.log("db:", db);

import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

db.init();

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
