import { ActionIcon, Button, Input } from "@mantine/core";
import React, { useContext, useState } from "react";
import { useLogin } from "../hooks/useUsers";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LoginForm = () => {
  const { mutate, isPending, isError, error, isSuccess } = useLogin();
  const [data, setData] = useState({ email: "", password: "" });
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { login, user } = useContext(AuthContext);

  async function handleLogin() {
    if (data.email.trim() === "" || data.password.trim() === "") {
      toast.error("all fields are required");
      return;
    }
    mutate(data, {
      onSuccess: (res) => {
        toast.success(res.message || "Successfully logged");
        login(res.user, res.token);

        setData({ email: "", password: "" });
        navigate("/");
      },

      onError: (err) => {
        toast.error(err.response?.data?.message || "Something went wrong");
      },
    });
  }
  return (
    <div>
      <h1 className="font-bold text-2xl text-center my-3">Login</h1>
      <Input
        placeholder="email"
        type="email"
        name="email"
        value={data.email}
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <Input
        my={"sm"}
        placeholder="password"
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
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <Button loading={isPending} onClick={handleLogin}>
        login
      </Button>
    </div>
  );
};

export default LoginForm;
