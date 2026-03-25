import { Breadcrumbs, Anchor, Box, Input, Button } from "@mantine/core";
import { NavLink } from "react-router-dom";

const items = [
  { title: "Home", href: "/" },
  { title: "Setting", href: "#" },
].map((item, index) => (
  <NavLink to={item.href} key={index}>
    {item.title}
  </NavLink>
));

const SettingPage = () => {
  return (
    <div className="container p-2">
      <Breadcrumbs>{items}</Breadcrumbs>
      <h1 className="text-center font-bold text-3xl my-1">Setting</h1>
      <Box mx={"auto"} maw={500}>
        <Input placeholder="name" />
        <Input my={8} placeholder="email" readOnly />
        <Input placeholder="current password" />
        <Input my={8} placeholder="new password" />
        <Input placeholder="re-enter new password" />
        <Button color="gray" mt={8}>
          update profile
        </Button>
      </Box>
    </div>
  );
};

export default SettingPage;
