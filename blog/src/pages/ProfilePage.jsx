import { Breadcrumbs, Anchor } from "@mantine/core";

const items = [
  { title: "Home", href: "/" },
  { title: "Profile", href: "#" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

const ProfilePage = () => {
  return (
    <div className="container p-2">
      <Breadcrumbs>{items}</Breadcrumbs>
      <h1>profile page</h1>
    </div>
  );
};

export default ProfilePage;
