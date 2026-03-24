import { Tabs } from "@mantine/core";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { useState } from "react";

const AuthPage = () => {
  const [tab, setTab] = useState("login");
  return (
    <div className="mx-auto my-1 max-w-125">
      <Tabs
        value={tab}
        onChange={setTab}
        defaultValue="gallery"
        color="black"
        maw={400}
        className="mx-auto"
      >
        <Tabs.List grow justify="center">
          <Tabs.Tab value={"login"}>Login</Tabs.Tab>
          <Tabs.Tab value={"signup"}>Signup</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="login">
          <LoginForm />
        </Tabs.Panel>

        <Tabs.Panel value="signup">
          <SignupForm />
        </Tabs.Panel>
      </Tabs>
      {tab !== "login" ? (
        <p className=" ml-2 text-center" onClick={() => setTab("login")}>
          Already have an account?{" "}
          <span className="text-blue-500  cursor-pointer underline">login</span>
        </p>
      ) : (
        <p className=" ml-2 text-center" onClick={() => setTab("signup")}>
          Don't have an account?{" "}
          <span className="text-blue-500  cursor-pointer underline">
            signup
          </span>
        </p>
      )}
    </div>
  );
};

export default AuthPage;
