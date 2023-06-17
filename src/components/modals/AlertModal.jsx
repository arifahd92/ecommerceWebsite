import { useContext } from "react";

import { Modal, Button } from "react-bootstrap";
import ModalContext from "../store/modal-context";

function AlertModal(props) {
  const { showAlertModal, alertModalHandler } = useContext(ModalContext);

  let theme = "bg-danger";
  if (props.theme === "green") {
    theme = "bg-success";
  }

  return (
    <>
      <Modal show={showAlertModal} onHide={alertModalHandler}>
        <Modal.Header closeButton className={theme}>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={theme}>{props.body}</Modal.Body>
        <Modal.Footer className={theme}>
          <Button
            variant="dark"
            onClick={() => {
              alertModalHandler("", "", "");
            }}
          >
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AlertModal;
