import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center justify-center h-full">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl md:text-4xl font-bold">Page is Not Found</h1>
        <Button onClick={() => navigate("/")}>Back To Home</Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
