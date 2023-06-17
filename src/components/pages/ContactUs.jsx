import React, { useContext, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import ModalContext from "../store/modal-context";

function ContactUs() {
  const nameRef = useRef("");
  const messageRef = useRef("");
  const emailRef = useRef("");
  const { alertModalHandler } = useContext(ModalContext);

  async function submitHandler(event) {
    event.preventDefault();

    const userMessage = {
      name: nameRef.current.value,
      message: messageRef.current.value,
      email: emailRef.current.value,
    };

    try {
      const response = await fetch(
        "https://e-commerce-app-ce50f-default-rtdb.firebaseio.com/userMessages.json",
        {
          method: "POST",
          body: JSON.stringify(userMessage),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);

      nameRef.current.value = "";
      messageRef.current.value = "";
      emailRef.current.value = "";

      alertModalHandler(
        "Message Sent",
        "Message Sent Successfully, we will reach you soon!",
        "green"
      );
    } catch (err) {
      alertModalHandler(
        "Message Not Sent",
        "Something goes wrong!!! \nPlease try after sometime...",
        ""
      );
    }
  }

  return (
    <section className="mt-5 d-flex justify-content-center">
      <Form onSubmit={submitHandler} className="w-50 p-5 m-5">
        <Form.Group controlId="formBasicPassword" className="mt-5">
          <Form.Label>Name :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            ref={nameRef}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail" className="mt-3">
          <Form.Label>Email :</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={emailRef}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1" className="mt-3">
          <Form.Label>Your Message :</Form.Label>
          <Form.Control as="textarea" rows={3} ref={messageRef} required />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          Send Message
        </Button>
      </Form>
    </section>
  );
}

export default ContactUs;
