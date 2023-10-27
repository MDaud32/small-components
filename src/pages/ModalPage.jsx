import React, { useState } from "react";
import Modal from "../component/Modal";
import Button from "../component/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const modal = (
    <Modal
      show={handleClose}
      actionBar={
        <Button primary onClick={handleClose}>
          i accept
        </Button>
      }>
      <p>this is a modal</p>
    </Modal>
  );
  return (
    <div>
      <Button primary rounded onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
