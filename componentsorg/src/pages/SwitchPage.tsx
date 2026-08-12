import { useState } from "react";
import Switch from "../components/Switch";

const SwitchPage = () => {
  const [toggel, setToggle] = useState<boolean>(false);
  return (
    <div>
      <Switch active={toggel} onSwitch={() => setToggle((toggel) => !toggel)} />
    </div>
  );
};

export default SwitchPage;
