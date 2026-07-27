import Login from "@/components/Login";
import Signup from "@/components/Signup";
import { useNavigate, useSearchParams } from "react-router-dom";

const AuthPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const isTab = searchParams.get("tab");

  return (
    <div>
      {isTab === "login" ? <Login /> : <Signup />}
      <div className="text-center mt-2">
        {isTab !== "login" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setSearchParams({ tab: "login" })}
              className="text-blue-400 underline cursor-pointer"
            >
              login
            </span>{" "}
          </p>
        ) : (
          <p>
            Don't have an account{" "}
            <span
              onClick={() => setSearchParams({ tab: "signup" })}
              className="text-blue-400 underline cursor-pointer"
            >
              Signup
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
