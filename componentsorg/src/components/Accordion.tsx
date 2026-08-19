import { useRef, useState } from "react";
import Button from "./Button";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="border rounded-lg max-w-100 mx-auto overflow-hidden">
      <div className="flex justify-between p-2 bg-gray-200">
        <h1>title</h1>
        <Button
          text={isOpen ? "close" : "open"}
          click={() => setIsOpen(!isOpen)}
        />
      </div>
      <div
        ref={ref}
        style={{
          height: isOpen ? `${ref.current?.scrollHeight}px` : "0px",
          backgroundColor: "red",
          opacity: isOpen ? 1 : 0,
          overflow: "hidden",
          transition: "all 0.4s ease, opacity 0.35s ease",
        }}
        //className={` ${isOpen ? "max-w-max p-2 block transition-all duration-75 ease-in-out" : "w-0 hidden"}`}
      >
        <p className="bg-yellow-100 m-2 p-2">content</p>
      </div>
    </div>
  );
};

export default Accordion;
