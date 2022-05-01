import fs from "fs";
import path from "path";
import { ApolloServer, PubSub } from "apollo-server";
import { PrismaClient } from "@prisma/client";

import { getUserId } from "./src/utils";
import * as Query from "./src/resolvers/Query";
import * as Mutation from "./src/resolvers/Mutation";
import * as User from "./src/resolvers/User";
import * as Link from "./src/resolvers/Link";
import * as Subscription from "./src/resolvers/Subscription";
import * as Vote from "./src/resolvers/Vote";

const prisma = new PrismaClient();
const pubSub = new PubSub();

const resolvers = {
  Query,
  Mutation,
  User,
  Link,
  Vote,
  Subscription,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "src/schema.graphql"), "utf8"),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma: prisma as PrismaClient,
      pubSub: pubSub as PubSub,
      userId: req && req.headers.authorization ? getUserId(req) : null,
    };
  },
});

server.listen().then(({ url }) => console.log(`Server running on ${url}`));

export default null;
