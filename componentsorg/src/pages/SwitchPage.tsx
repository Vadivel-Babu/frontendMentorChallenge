import { useState } from "react";
import Switch from "../components/Switch";

const SwitchPage = () => {
  const [toggel, setToggle] = useState<boolean>(false);
  const [size, setSize] = useState<"sm" | "md" | "lg">("sm");
  return (
    <div className="flex gap-2.5">
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
  );
};

export default SwitchPage;
