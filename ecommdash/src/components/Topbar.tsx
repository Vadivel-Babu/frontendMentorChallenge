import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Topbar = () => {
  return (
    <div className="w-full md:inline-block p-6 shadow">
      <div className="max-w-100 flex justify-center gap-1">
        <Input name="search" placeholder="search" />
        <Button className="bg-primary-blue">search</Button>
      </div>
    </div>
  );
};

export default Topbar;
