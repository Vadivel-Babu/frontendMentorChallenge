import { ActionIcon, Button, Input } from "@mantine/core";
import React, { useState } from "react";
import { useLogin } from "../hooks/useUsers";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
const LoginForm = () => {
  const { mutate, isPending, isError, error, isSuccess } = useLogin();
  const [data, setData] = useState({ email: "", password: "" });
  const [isVisible, setIsVisible] = useState(false);

  async function handleLogin() {
    if (data.email.trim() === "" || data.password.trim() === "") {
      toast.error("all fields are required");
      return;
    }
    const res = await mutate(data);
    if (isError) {
      toast.error(error.response.data.message || "something went wrong");
    }
    if (isSuccess) {
      toast.success("Successfully logged");
      setData({ email: "", password: "" });
    }
  }
  return (
    <div>
      <h1 className="font-bold text-2xl text-center my-3">Login</h1>
      <Input
        placeholder="email"
        type="email"
        name="email"
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <Input
        my={"sm"}
        placeholder="password"
        type={isVisible ? "text" : "password"}
        name="password"
        rightSectionPointerEvents="all"
        rightSection={
          <ActionIcon
            onClick={() => setIsVisible(!isVisible)}
            variant="transparent"
            color="gray"
          >
            {isVisible ? <FaEyeSlash /> : <FaEye />}
          </ActionIcon>
        }
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <Button loading={isPending} onClick={handleLogin}>
        login
      </Button>
    </div>
  );
};

export default LoginForm;
