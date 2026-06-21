import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import type { User } from "@/types/user";

const Login = () => {
  const [credentials, setCreadentials] = useState<User | null>(null);
  return (
    <form>
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
      <Button>Login</Button>
    </form>
  );
};

export default Login;
