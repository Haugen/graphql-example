const newLinkSubscription = (parent, args, context, info) => {
  return context.pubSub.asyncIterator("NEW_LINK");
};

const newVoteSubscription = (parent, args, context, info) => {
  return context.pubSub.asyncIterator("NEW_VOTE");
};

const newLink = {
  subscribe: newLinkSubscription,
  resolve: (payload) => payload,
};

const newVote = {
  subscribe: newVoteSubscription,
  resolve: (payload) => payload,
};

export { newLink, newVote };
