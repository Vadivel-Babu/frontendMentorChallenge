import { Button, Input } from "@mantine/core";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useSignin } from "../hooks/useUsers";

const SignupForm = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });
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
    const res = await mutate(data);

    if (isError) {
      toast.error(error.response.data.message || "something went wrong");
    }
    if (isSuccess) {
      toast.success("Successfully register");
      setData({ name: "", email: "", password: "" });
    }
  }
  return (
    <div>
      <h1 className="font-bold text-2xl text-center my-3">Signup</h1>
      <Input
        placeholder="name"
        name="name"
        type="text"
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <Input
        my={"sm"}
        placeholder="email"
        type="email"
        name="email"
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <Input
        my={"sm"}
        placeholder="password"
        type="password"
        name="password"
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <Button onClick={handleSignin}>signin</Button>
    </div>
  );
};

export default SignupForm;
