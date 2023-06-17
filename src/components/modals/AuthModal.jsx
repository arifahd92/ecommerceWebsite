import { useContext, useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AuthContext from "../store/auth-context";
import ModalContext from "../store/modal-context";

function authHandler(url, fetchBody, alertModalHandler, loginHandler) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(fetchBody),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        res.json().then((err) => {
          alertModalHandler("Authentication Failed", err.error.message, "");
        });
      }
    })
    .then((res) => {
      localStorage.setItem(
        "expiresIn",
        JSON.stringify({
          expiresIn: res.expiresIn,
          createdAt: new Date().getTime(),
        })
      );
      loginHandler(res.idToken, res.expiresIn);
      alertModalHandler(
        "Authentication Success",
        "Authentication is successful",
        "green"
      );
    })
    .catch((err) => {
      console.log(err);
    });
}

function passwordChangeHandler(url, fetchBody, alertModalHandler) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(fetchBody),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        res.json().then((err) => {
          alertModalHandler("Something went wrong", err.data.message, "");
        });
      }
    })
    .then((res) => {
      alertModalHandler(
        "Change Success",
        "Password is changed successfully",
        "green"
      );
    })
    .catch((err) => {
      console.log(err);
    });
}

function AuthModal(props) {
  const { showAuthModal, authModalHandler, alertModalHandler } =
    useContext(ModalContext);
  const { token, loginHandler } = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    let url = "";
    let fetchBody = {};

    if (props.title.toLowerCase() == "change password") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDeX-969z6MGYfH303tiV-00jeCDih_x0Y";

      fetchBody = {
        idToken: token,
        password: passwordInputRef.current.value,
        returnSecureToken: false,
      };

      passwordChangeHandler(url, fetchBody, alertModalHandler);

      return;
    }

    if (props.title.toLowerCase() == "signup") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDeX-969z6MGYfH303tiV-00jeCDih_x0Y";
    }

    if (props.title.toLowerCase() == "signin") {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDeX-969z6MGYfH303tiV-00jeCDih_x0Y";
    }

    fetchBody = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
      returnSecureToken: true,
    };

    authHandler(url, fetchBody, alertModalHandler, loginHandler);
  }

  return (
    <>
      <Modal show={showAuthModal} onHide={authModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title} Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitHandler}>
            {!props.changePasswordOnly && (
              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>Email :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={emailInputRef}
                />
              </Form.Group>
            )}

            <Form.Group controlId="formBasicPassword" className="mb-4">
              <Form.Label>
                {props.changePasswordOnly && "New"} Password :
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                ref={passwordInputRef}
                minLength={2}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-4">
              {props.title}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AuthModal;
