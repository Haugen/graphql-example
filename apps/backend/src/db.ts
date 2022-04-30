import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
  const newLink = await prisma.link.create({
    data: {
      url: "a url",
      description: "A dscription",
    },
  });

  const allLinks = await prisma.link.findMany();
  console.log(allLinks);
};

main().then(async () => await prisma.$disconnect());

export { main };
