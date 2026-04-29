import { Breadcrumbs, Anchor, Box, Input, Button } from "@mantine/core";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";

const items = [
  { title: "Home", href: "/" },
  { title: "Setting", href: "#" },
].map((item, index) => (
  <NavLink to={item.href} key={index}>
    {item.title}
  </NavLink>
));

const SettingPage = () => {
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    img: null,
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  const { user } = useContext(AuthContext);
  useEffect(() => {
    setData({
      ...data,
      id: user?.id,
      name: user?.name,
      email: user?.email,
      img: user?.img,
    });
  }, []);
  return (
    <div className="container p-2">
      <Breadcrumbs>{items}</Breadcrumbs>
      <h1 className="text-center font-bold text-3xl my-1">Setting</h1>
      <Box mx={"auto"} maw={500}>
        <Input
          placeholder="name"
          name="name"
          value={data?.name}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
        />
        <Input my={8} placeholder="email" value={data?.email} readOnly />
        <Input placeholder="current password" name="password" />
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
