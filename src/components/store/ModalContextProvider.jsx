import { useState } from "react";
import ModalContext from "./modal-context";

function ModalContextProvider(props) {
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [alertModalData, setAlertModalData] = useState({});
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalData, setAuthModalData] = useState({});
  const [showCartModal, setShowCartModal] = useState(false);

  const alertModalHandler = (title, body, theme) => {
    setAlertModalData({ title, body, theme });
    setShowAlertModal((prev) => !prev);
  };

  const authModalHandler = (title, changePasswordOnly) => {
    setAuthModalData({ title, changePasswordOnly });
    setShowAuthModal((prev) => !prev);
  };

  const cartModalHandler = () => {
    setShowCartModal((prev) => !prev);
  };

  const modalContext = {
    showAlertModal,
    alertModalData,
    showAuthModal,
    authModalData,
    showCartModal,
    alertModalHandler,
    authModalHandler,
    cartModalHandler,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {props.children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;
