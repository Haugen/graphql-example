import fs from "fs";
import path from "path";
import { ApolloServer } from "apollo-server";

const links = [
  {
    id: 1,
    url: "https://ogac.io/",
    description: "OGAC",
  },
  {
    id: 2,
    url: "https://ogac.io/",
    description: "OGAC",
  },
];

const resolvers = {
  Query: {
    info: () => "This is the API of a GraphQL backend practice project",
    feed: () => links,
    link: (_: any, args: any) => links.find((item) => item.id == args.id),
  },
  Mutation: {
    postLink: (_: any, { description, url }: any) => {
      const id = links.length + 1;
      const link = {
        id,
        description,
        url,
      };
      links.push(link);
      return link;
    },
  },
  Link: {
    id: (parent: any) => parent.id,
    description: (parent: any) => parent.description,
    url: (parent: any) => parent.url,
  },
};

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "src/schema.graphql"), "utf8"),
  resolvers,
});

server.listen().then(({ url }) => console.log(`Server running on ${url}`));

export default null;
