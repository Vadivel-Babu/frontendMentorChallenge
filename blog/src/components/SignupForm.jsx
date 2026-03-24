import { Button, Input } from "@mantine/core";

const SignupForm = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center my-3">Signup</h1>
      <Input placeholder="name" />
      <Input my={"sm"} placeholder="email" />
      <Input my={"sm"} placeholder="password" />
      <Button>signin</Button>
    </div>
  );
};

export default SignupForm;
