import { createContext } from "react";

const ModalContext = createContext({
  alertModalHandler: () => {},
  authModalHandler: () => {},
  cartModalHandler: () => {},
  showAlertModal: "",
  showAuthModal: "",
  showCartModal: "",
  alertModalData: null,
  authModalData: null,
});

export default ModalContext;
