const postedBy = (parent, args, context) => {
  return context.prisma.link
    .findUnique({ where: { id: parent.id } })
    .postedBy();
};

const votes = (parent, args, context) => {
  return context.prisma.link.findUnique({ where: { id: parent.id } }).votes();
};

export { postedBy, votes };
