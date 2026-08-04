import Topbar from "@/components/Topbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SettingPage = () => {
  return (
    <>
      <Topbar />
      <div className="mx-4">
        <h1 className="text-xl my-2 md:text-3xl text-center">
          Profile Setting
        </h1>
        <form
          action=""
          className="border rounded-2xl p-2 space-y-1.5 max-w-100 mx-auto"
        >
          <Input type="file" name="img" />
          <Input type="text" placeholder="enter your name" name="name" />
          <Input
            type="text"
            placeholder="enter your email"
            name="email"
            readOnly
          />
          <Input
            type="text"
            placeholder="enter your email"
            name="email"
            readOnly
          />
          <Input
            type="text"
            placeholder="enter your email"
            name="email"
            readOnly
          />
          <Input
            type="text"
            placeholder="enter your email"
            name="email"
            readOnly
          />

          <Button className="bg-primary-blue text-white">update</Button>
        </form>
      </div>
    </>
  );
};

export default SettingPage;
