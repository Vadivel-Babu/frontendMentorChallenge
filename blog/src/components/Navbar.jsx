import { Button, Title } from "@mantine/core";
import { CiLogout, CiLogin } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="bg-black text-white px-2 py-3">
      <div className="container flex justify-between items-center">
        <Title component="h1">Blog</Title>
        <div className="flex space-x-2">
          <Button
            onClick={() => navigate("/login")}
            size="compact-md"
            color="gray"
            rightSection={<CiLogin />}
          >
            login
          </Button>
          <Button
            onClick={() => navigate("/create-post")}
            size="compact-md"
            color="gray"
          >
            create post
          </Button>
          <Button size="compact-md" color="gray" rightSection={<CiLogout />}>
            logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
