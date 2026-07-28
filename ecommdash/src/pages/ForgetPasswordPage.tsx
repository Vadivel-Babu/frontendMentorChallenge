import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ForgetPasswordPage = () => {
  return (
    <div className="mx-auto max-w-100 border p-2 rounded-md space-y-2 mt-50">
      <Input type="email" placeholder="Enter you email id" />
      <Button>Send</Button>
    </div>
  );
};

export default ForgetPasswordPage;
