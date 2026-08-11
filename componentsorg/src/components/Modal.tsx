import { useRef } from "react";

interface CardProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode; // Handles elements, strings, numbers, arrays, etc.
}

const Modal = ({ title, isOpen, onClose, children }: CardProps) => {
  const modalRaf = useRef(null);
  const handleClickOnModal = () => {
    if (modalRaf.current && modalRaf.current.classList.contains("overlay")) {
      onClose();
    }
  };
  return (
    <div
      onClick={handleClickOnModal}
      ref={modalRaf}
      className={`${isOpen ? "fixed" : "hidden"} overlay top-0 left-0 right-0 flex justify-center items-center z-10 bg-gray-300/50 w-full h-full`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col bg-white rounded-2xl gap-2 min-w-80 min-h-100"
      >
        <div className="flex justify-between p-2">
          <h1 className="text-lg lg:text-2xl text-purple-500">
            {title || "No title"}
          </h1>
          <button onClick={onClose} className="bg-white p-1">
            close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
