import { useQuery, gql } from "@apollo/client";

import Link from "./Link";
import { LinkType } from "../types";

const FEED_QUERY = gql`
  {
    feed {
      count
      links {
        id
        url
        description
      }
    }
  }
`;

const LinkList = () => {
  const { data, loading } = useQuery(FEED_QUERY);

  if (loading) return <>loading</>;

  return (
    <div className="m-4 p-6 bg-slate-100">
      {data.feed.links.map((link: LinkType, index) => (
        <Link key={`link_${index}`} link={link}></Link>
      ))}
    </div>
  );
};

export default LinkList;
