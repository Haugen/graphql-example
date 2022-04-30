import fs from "fs";
import path from "path";
import { ApolloServer } from "apollo-server";
import { PrismaClient } from "@prisma/client";

import { getUserId } from "./src/utils";
import * as Query from "./src/resolvers/Query";
import * as Mutation from "./src/resolvers/Mutation";
import * as User from "./src/resolvers/User";
import * as Link from "./src/resolvers/Link";

const prisma = new PrismaClient();

const resolvers = {
  Query,
  Mutation,
  User,
  Link,
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "src/schema.graphql"), "utf8"),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma: prisma as PrismaClient,
      userId: req && req.headers.authorization ? getUserId(req) : null,
    };
  },
});

server.listen().then(({ url }) => console.log(`Server running on ${url}`));

export default null;
