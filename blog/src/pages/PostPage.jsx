import { Breadcrumbs, Anchor } from "@mantine/core";

const items = [
  { title: "Home", href: "/" },
  { title: "Post", href: "#" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

const PostPage = () => {
  return (
    <div className="container p-2">
      <Breadcrumbs>{items}</Breadcrumbs>
    </div>
  );
};

export default PostPage;
