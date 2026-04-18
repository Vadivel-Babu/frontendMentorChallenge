import { Button, Title } from "@mantine/core";
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
        <Title component="h1">Blog</Title>
        <div className="flex space-x-2">
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
              >
                logout
              </Button>
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
