import Login from "@/components/Login";
import Signup from "@/components/Signup";
import { useLocation, useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  return (
    <div>
      {true ? <Login /> : <Signup />}
      <p className="text-center mt-2">
        {true ? "Already have an account?" : "Don't have an account"}
      </p>
    </div>
  );
};

export default AuthPage;
