import {
  Breadcrumbs,
  Anchor,
  Box,
  Input,
  Button,
  ActionIcon,
  FileButton,
  Image,
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
  const [preview, setPreview] = useState(null);
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

  const { mutate, isPending } = useUserUpdate();
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    setData({
      ...data,
      id: user?.id,
      name: user?.name,
      email: user?.email,
      img: user?.img,
    });
  }, []);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  function handleUpdateUser() {
    if (!data.name.trim()) {
      toast.error("All fields are required");
      return;
    }
    // if (!data.password.trim() && data.newPassword.trim()) {
    //   toast.error("password required");
    //   return;
    // }
    // if (data.password.trim() && !data.newPassword.trim()) {
    //   toast.error("new password required");
    //   return;
    // }
    // if (
    //   data.password.trim() &&
    //   data.newPassword.trim() &&
    //   !data.confirmPassword.trim()
    // ) {
    //   toast.error("confirm password required");
    //   return;
    // }
    // if (
    //   data.newPassword.trim() &&
    //   data.confirmPassword.trim() &&
    //   data.newPassword !== data.confirmPassword
    // ) {
    //   toast.error("new password and confirm password not matched");
    //   return;
    // }

    const formData = new FormData();

    formData.append("id", data.id);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    //formData.append("newpassword", data.newPassword);

    if (data.img) {
      formData.append("img", data.img);
    }
    //return;
    mutate(
      { id: data.id, formData },
      {
        onSuccess: (res) => {
          toast.success(res.message || "Updated successfully");
          logout();
        },
        onError: (err) => {
          toast.error(err.response?.data?.message || "Update failed");
        },
      },
    );
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
        {/* <Input
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
        /> */}
        {/* <Input
          my={"sm"}
          placeholder="new password"
          className="caret-blue-500"
          type={isVisiblePwd ? "text" : "password"}
          name="newPassword"
          rightSectionPointerEvents="all"
          value={data.newPassword}
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
        /> */}
        {/* <Input
          my={"sm"}
          placeholder="confirm password"
          className="caret-blue-500"
          type={isVisibleNewPwd ? "text" : "password"}
          name="confirmPassword"
          rightSectionPointerEvents="all"
          value={data.confirmPassword}
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
        /> */}
        {preview && (
          <>
            <Image src={preview} alt="img" w={200} my={5} radius="md" />
            <Button
              color="red"
              mb={"xs"}
              onClick={() => {
                setData({ ...data, img: null });
                setPreview(null);
              }}
            >
              Delete
            </Button>
          </>
        )}
        {!data?.img && !preview && (
          <FileButton
            my={8}
            accept="image/png,image/jpeg"
            onChange={(selectedFile) => {
              setData({ ...data, img: selectedFile });

              if (selectedFile) {
                setPreview(URL.createObjectURL(selectedFile));
              }
            }}
          >
            {(props) => (
              <Button color="black" {...props}>
                Upload image
              </Button>
            )}
          </FileButton>
        )}

        <br />
        <Button
          loading={isPending}
          onClick={handleUpdateUser}
          color="gray"
          mt={8}
        >
          update profile
        </Button>
      </Box>
    </div>
  );
};

export default SettingPage;
