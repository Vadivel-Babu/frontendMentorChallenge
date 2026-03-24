import { Button, Input } from "@mantine/core";
import React from "react";

const LoginForm = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center my-3">Login</h1>
      <Input placeholder="email" />
      <Input my={"sm"} placeholder="password" />
      <Button>login</Button>
    </div>
  );
};

export default LoginForm;
