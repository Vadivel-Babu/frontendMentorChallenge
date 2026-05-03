import {
  Breadcrumbs,
  Anchor,
  Box,
  Input,
  Button,
  ActionIcon,
} from "@mantine/core";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";
import { useUserUpdate } from "../hooks/useUsers";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const items = [
  { title: "Home", href: "/" },
  { title: "Setting", href: "#" },
].map((item, index) => (
  <NavLink to={item.href} key={index}>
    {item.title}
  </NavLink>
));

const SettingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisiblePwd, setIsVisiblePwd] = useState(false);
  const [isVisibleNewPwd, setIsVisibleNewPwd] = useState(false);
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    img: null,
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  const { mutate } = useUserUpdate();
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
  function handleUpdateUser() {
    if (!data.name) {
      toast.error("All fields required");
      return;
    }

    const formData = new FormData();

    formData.append("id", data.id);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("newpassword", data.newPassword);

    // if (postData.img) {
    //   formData.append("img", postData.img);
    // }
  }
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
        <Input
          my={"sm"}
          placeholder="password"
          className="caret-blue-500"
          type={isVisible ? "text" : "password"}
          name="password"
          rightSectionPointerEvents="all"
          value={data.password}
          rightSection={
            <ActionIcon
              onClick={() => setIsVisible(!isVisible)}
              variant="transparent"
              color="gray"
            >
              {isVisible ? <FaEyeSlash /> : <FaEye />}
            </ActionIcon>
          }
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
        />
        <Input
          my={"sm"}
          placeholder="new password"
          className="caret-blue-500"
          type={isVisible ? "text" : "password"}
          name="newPassword"
          rightSectionPointerEvents="all"
          value={data.password}
          rightSection={
            <ActionIcon
              onClick={() => setIsVisiblePwd(!isVisiblePwd)}
              variant="transparent"
              color="gray"
            >
              {isVisiblePwd ? <FaEyeSlash /> : <FaEye />}
            </ActionIcon>
          }
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
        />
        <Input
          my={"sm"}
          placeholder="confirm password"
          className="caret-blue-500"
          type={isVisible ? "text" : "password"}
          name="newpassword"
          rightSectionPointerEvents="all"
          value={data.password}
          rightSection={
            <ActionIcon
              onClick={() => setIsVisibleNewPwd(!isVisibleNewPwd)}
              variant="transparent"
              color="gray"
            >
              {isVisibleNewPwd ? <FaEyeSlash /> : <FaEye />}
            </ActionIcon>
          }
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
        />
        <Button color="gray" mt={8}>
          update profile
        </Button>
      </Box>
    </div>
  );
};

export default SettingPage;
