const feed = (parent, args, context) => {
  return context.prisma.link.findMany();
};

export { feed };
