import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
import Backbtn from "../components/Backbtn";

const ModalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className=" h-screen p-5">
      <Backbtn />
      <div className="flex justify-center items-center h-full">
        <Button text="open modal" click={() => setIsModalOpen(true)} />

        <Modal
          title="modal"
          onClose={() => setIsModalOpen(false)}
          isOpen={isModalOpen}
        >
          <div>contents</div>
        </Modal>
      </div>
    </div>
  );
};

export default ModalPage;
