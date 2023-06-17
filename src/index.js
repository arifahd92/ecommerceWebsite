import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import ModalContextProvider from "./components/store/ModalContextProvider";
import CartContextProvider from "./components/store/CartContextProvider";
import AuthContextProvider from "./components/store/AuthContextProvider";

const root = createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ModalContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartContextProvider>
    </ModalContextProvider>
  </AuthContextProvider>
);
