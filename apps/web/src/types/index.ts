export type LinkType = {
  id?: string;
  description?: string;
  url?: string;
  postedBy?: UserType;
  votes?: Vote[];
};

export type UserType = {
  id?: string;
  name?: string;
  email?: string;
  links?: LinkType[];
};

export type Vote = {
  id?: string;
  link?: LinkType;
  user?: UserType;
};
