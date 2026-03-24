import { Breadcrumbs, Anchor } from "@mantine/core";

const items = [
  { title: "Home", href: "/" },
  { title: "Setting", href: "#" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

const SettingPage = () => {
  return (
    <div className="container p-2">
      <Breadcrumbs>{items}</Breadcrumbs>
      <h1>setting page</h1>
    </div>
  );
};

export default SettingPage;
