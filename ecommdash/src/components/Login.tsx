import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import type { User } from "@/types/user";

const Login = () => {
  const [credentials, setCreadentials] = useState<User | null>(null);
  return (
    <form className="mx-auto max-w-100 border p-2 rounded-md space-y-2 mt-50">
      <h1 className="text-xl font-bold">Login</h1>
      <Input
        name="email"
        placeholder="enter your email..."
        type="email"
        value={credentials?.email}
        onChange={(e) =>
          setCreadentials({ ...credentials, [e.target.name]: e.target.value })
        }
      />
      <Input
        name="password"
        placeholder="enter your password..."
        type="password"
        value={credentials?.password}
        onChange={(e) =>
          setCreadentials({ ...credentials, [e.target.name]: e.target.value })
        }
      />
      <Button className="bg-primary-blue">Login</Button>
    </form>
  );
};

export default Login;
