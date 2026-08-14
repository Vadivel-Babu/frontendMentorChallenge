import { useState } from "react";
import Switch from "../components/Switch";
import Backbtn from "../components/Backbtn";

const SwitchPage = () => {
  const [toggel, setToggle] = useState<boolean>(false);
  const [size, setSize] = useState<"sm" | "md" | "lg">("sm");
  return (
    <div className="  p-5">
      <Backbtn />
      <h1 className="text-2xl font-bold text-center mb-5">Switch</h1>
      <div className="flex gap-5 justify-center">
        <select
          onChange={(e) => setSize(e.target.value as "sm" | "md" | "lg")}
          name=""
          id=""
        >
          <option value="sm">sm</option>
          <option value="md">md</option>
          <option value="lg">lg</option>
        </select>
        <Switch
          size={size}
          active={toggel}
          onSwitch={() => setToggle((toggel) => !toggel)}
        />
      </div>
    </div>
  );
};

export default SwitchPage;
