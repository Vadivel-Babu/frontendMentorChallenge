import { useState } from "react";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>open</button>
      <Modal
        title="modal"
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      >
        <div>contents</div>
      </Modal>
    </div>
  );
};

export default ModalPage;
