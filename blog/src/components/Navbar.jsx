import { Button, Title, Avatar, Text, ActionIcon } from "@mantine/core";
import { useContext } from "react";
import { CiLogout, CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-black text-white px-2 py-3">
      <div className="container flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Blog</h1>
        <div className="flex space-x-2 items-center">
          {user ? (
            <>
              <Button
                onClick={() => navigate("/create-post")}
                size="compact-md"
                color="gray"
              >
                create post
              </Button>
              <Button
                size="compact-md"
                color="gray"
                rightSection={<CiLogout />}
                onClick={() => logout()}
                className="cursor-pointer hidden lg:visible"
              >
                logout
              </Button>
              <div className="inline-block md:hidden">
                <Avatar
                  radius="xl"
                  size={"md"}
                  className="cursor-pointer xl:hidden"
                  onClick={() => navigate("/profile")}
                  src={user.img}
                />
              </div>
            </>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              size="compact-md"
              color="gray"
              rightSection={<CiLogin />}
            >
              login
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
