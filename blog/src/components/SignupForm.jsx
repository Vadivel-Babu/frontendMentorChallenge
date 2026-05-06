import { ActionIcon, Button, Input } from "@mantine/core";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useSignin } from "../hooks/useUsers";

const SignupForm = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [isVisible, setIsVisible] = useState(false);
  const { mutate, isPending, isError, error, isSuccess } = useSignin();

  async function handleSignin() {
    if (
      data.name.trim() === "" ||
      data.email.trim() === "" ||
      data.password.trim() === ""
    ) {
      toast.error("all fields are required");
      return;
    }
    mutate(data, {
      onSuccess: (res) => {
        toast.success(res.message || "Successfully register");

        setData({ name: "", email: "", password: "" });
        navigate("/");
      },

      onError: (err) => {
        toast.error(err.response?.data?.message || "Something went wrong");
      },
    });
  }
  return (
    <div>
      <h1 className="font-bold text-2xl text-center my-3">Signup</h1>
      <Input
        placeholder="name"
        className="caret-blue-500"
        name="name"
        type="text"
        value={data.name}
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <Input
        my={"sm"}
        placeholder="email"
        className="caret-blue-500"
        type="email"
        name="email"
        value={data.email}
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <Input
        my={"sm"}
        className="caret-blue-500"
        placeholder="password"
        value={data.password}
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
      <Button onClick={handleSignin}>signin</Button>
    </div>
  );
};

export default SignupForm;
