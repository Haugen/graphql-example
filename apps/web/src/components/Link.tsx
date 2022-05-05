import { LinkType } from "../types";

type Props = {
  link: LinkType;
};

const Link = ({ link }: Props) => {
  return (
    <div>
      {link.description} - {link.url}
    </div>
  );
};

export default Link;
