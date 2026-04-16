import { Button, Input } from "@mantine/core";
import React, { useState } from "react";
import { useLogin } from "../hooks/useUsers";
const LoginForm = () => {
  //const login = useLogin();
  const [data, setData] = useState(null);

  async function handleLogin() {
    try {
      //const res = await login();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1 className="font-bold text-2xl text-center my-3">Login</h1>
      <Input
        placeholder="email"
        name="email"
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <Input
        my={"sm"}
        placeholder="password"
        name="password"
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <Button onClick={handleLogin}>login</Button>
    </div>
  );
};

export default LoginForm;
