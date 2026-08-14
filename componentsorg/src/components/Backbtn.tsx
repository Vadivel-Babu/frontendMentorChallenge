import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Backbtn = () => {
  const navigate = useNavigate();
  return <Button text="back" click={() => navigate(-1)} />;
};

export default Backbtn;
