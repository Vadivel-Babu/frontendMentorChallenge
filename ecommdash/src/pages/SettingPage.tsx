import Topbar from "@/components/Topbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, ImageUp } from "lucide-react";
import { useRef, useState } from "react";

const SettingPage = () => {
  const [isVisible, setVisible] = useState<number[]>([]);
  const imgRef = useRef();

  const handleToggleVisibility = (n: number) => {
    const isNumberExists = isVisible.includes(n);
    if (isNumberExists) {
      setVisible(() => isVisible.filter((num) => num !== n));
    } else {
      setVisible([...isVisible, n]);
    }
  };
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
          <div className="p-2">
            <div className="border-2 rounded-2xl border-dashed p-2 cursor-pointer flex flex-col items-center justify-center gap-3">
              <ImageUp size={30} />
              <h1>Upload Picture</h1>
            </div>
            <Input ref={imgRef} type="file" name="img" className="hidden" />
          </div>
          <Input type="text" placeholder="enter your name" name="name" />
          <Input
            type="text"
            placeholder="enter your email"
            name="email"
            readOnly
          />
          <div className="border rounded-lg flex">
            <Input
              type="password"
              placeholder="enter your current password"
              name="password"
              className="border-none"
            />
            <Button
              type="button"
              size={"icon"}
              className="bg-gray-200 text-black border-none rounded-bl-none rounded-tl-none"
              onClick={() => handleToggleVisibility(1)}
            >
              {isVisible.includes(1) ? <Eye /> : <EyeOff />}
            </Button>
          </div>
          <div className="border rounded-lg flex">
            <Input
              type="password"
              placeholder="enter your new password"
              name="password"
              className="border-none"
            />
            <Button
              type="button"
              size={"icon"}
              className="bg-gray-200 text-black border-none rounded-bl-none rounded-tl-none"
              onClick={() => handleToggleVisibility(2)}
            >
              {isVisible.includes(2) ? <Eye /> : <EyeOff />}
            </Button>
          </div>
          <div className="border rounded-lg flex">
            <Input
              type="password"
              placeholder="enter your current password"
              name="password"
              className="border-none"
            />
            <Button
              type="button"
              size={"icon"}
              className="bg-gray-200 text-black border-none rounded-bl-none rounded-tl-none"
              onClick={() => handleToggleVisibility(3)}
            >
              {isVisible.includes(3) ? <Eye /> : <EyeOff />}
            </Button>
          </div>

          <Button className="bg-primary-blue text-white">update</Button>
        </form>
      </div>
    </>
  );
};

export default SettingPage;
