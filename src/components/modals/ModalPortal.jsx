import { useContext } from "react";
import { createPortal } from "react-dom";
import ModalContext from "../store/modal-context";
import AlertModal from "./AlertModal";
import AuthModal from "./AuthModal";
import CartModal from "./CartModal";

function ModalPortal() {
  const ctx = useContext(ModalContext);
  const { title: authTitle, changePasswordOnly } = ctx.authModalData;
  const { title: alertTitle, body, theme } = ctx.alertModalData;

  return (
    <>
      {createPortal(
        <AlertModal title={alertTitle} body={body} theme={theme} />,
        document.getElementById("popups")
      )}
      {createPortal(
        <AuthModal title={authTitle} changePasswordOnly={changePasswordOnly} />,
        document.getElementById("popups")
      )}
      {createPortal(<CartModal />, document.getElementById("popups"))}
    </>
  );
}

export default ModalPortal;
