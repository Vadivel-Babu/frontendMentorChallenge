import { Button, Input } from "@mantine/core";
import { useState } from "react";

const SignupForm = () => {
  const [data, setData] = useState(null);

  async function handleSignin() {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1 className="font-bold text-2xl text-center my-3">Signup</h1>
      <Input
        placeholder="name"
        name="name"
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <Input
        my={"sm"}
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
      <Button onClick={handleSignin}>signin</Button>
    </div>
  );
};

export default SignupForm;
