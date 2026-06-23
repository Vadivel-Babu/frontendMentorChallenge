import Login from "@/components/Login";
import Signup from "@/components/Signup";
import { useLocation, useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.split("/");
  return (
    <div>
      <Login />
      <Signup />
    </div>
  );
};

export default AuthPage;
