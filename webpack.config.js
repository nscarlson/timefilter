const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: {
    "timefilter-graphql": "./packages/timefilter-graphql/src/index.js"
  },
  externals: [
    nodeExternals({
      modulesDir: "./node_modules"
    })
  ],
  module: {
    rules: [
      {
        loader: "graphql-tag/loader",
        test: /\.(graphql|gql)$/
      }
    ]
  },
  target: "node",
  node: {
    net: "empty",
    fs: "empty"
  }
};
