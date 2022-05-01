const newLinkSubscription = (parent, args, context, info) => {
  return context.pubSub.asyncIterator("NEW_LINK");
};

const newLink = {
  subscribe: newLinkSubscription,
  resolve: (payload) => payload,
};

export { newLink };
