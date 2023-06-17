import { useContext } from "react";
import { Navbar, Nav, Button, Badge } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import AuthContext from "./store/auth-context";
import CartContext from "./store/cart-context";
import ModalContext from "./store/modal-context";

function Header() {
  const { cartModalHandler, authModalHandler } = useContext(ModalContext);
  const { totalItems } = useContext(CartContext);
  const { isLoggedIn, logoutHandler } = useContext(AuthContext);
  const loc = useLocation();

  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      className="position-fixed fixed-top"
    >
      <Navbar.Brand href="#home" className="mr-5">
        <h1 style={{ fontFamily: "serif" }} className="font-weight-bolder">
          My Generics
        </h1>
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant="pills" defaultActiveKey="/home" className="mr-auto">
          <NavLink className="btn btn-primary mr-3" to="/">
            Home
          </NavLink>
          <NavLink className="btn btn-primary mr-3" to="/store">
            Store
          </NavLink>
          <NavLink className="btn btn-primary mr-3" to="/about">
            About
          </NavLink>
          <NavLink className="btn btn-primary mr-3" to="/contact">
            Contact Us
          </NavLink>
        </Nav>
        {isLoggedIn && loc.pathname === "/store" && (
          <Button
            variant="info"
            className="d-flex align-items-center mr-3"
            size="lg"
            onClick={cartModalHandler}
          >
            Cart
            <Badge pill variant="light" className="ml-3 p-2">
              {totalItems}
            </Badge>
          </Button>
        )}
        {!isLoggedIn && (
          <Button
            variant="success"
            className="d-flex align-items-center mr-3"
            size="lg"
            onClick={() => {
              authModalHandler("Signin", false);
            }}
          >
            Signin
          </Button>
        )}
        {!isLoggedIn && (
          <Button
            variant="primary"
            className="d-flex align-items-center mr-3"
            size="lg"
            onClick={() => {
              authModalHandler("Signup", false);
            }}
          >
            Signup
          </Button>
        )}
        {isLoggedIn && (
          <Button
            variant="primary"
            className="d-flex align-items-center mr-3"
            size="lg"
            onClick={() => {
              authModalHandler("Change Password", true);
            }}
          >
            Change Password
          </Button>
        )}
        {isLoggedIn && (
          <Button
            variant="danger"
            className="d-flex align-items-center mr-3"
            size="lg"
            onClick={logoutHandler}
          >
            Logout
          </Button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
