import { Breadcrumbs, Anchor } from "@mantine/core";
import { NavLink } from "react-router-dom";
import CommentCard from "../components/CommentCard";

const items = [
  { title: "Home", href: "/" },
  { title: "Post", href: "#" },
].map((item, index) => (
  <NavLink to={item.href} key={index}>
    {item.title}
  </NavLink>
));

const PostPage = () => {
  return (
    <div className="container p-2">
      <Breadcrumbs>{items}</Breadcrumbs>
      <CommentCard />
    </div>
  );
};

export default PostPage;
