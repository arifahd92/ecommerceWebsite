import { useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import styles from "./Store.module.css";
import AuthContext from "../store/auth-context";
import ModalContext from "../store/modal-context";
import StoreDataList from "../dataLists/StoreDataList";

export const STOREDATA = [
  {
    id: "a101",
    title: "Colors",
    price: 100.0,
    url: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "a102",
    title: "Yellow and Black Colors",
    price: 12.5,
    url: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "a103",
    title: "Black and white Colors",
    price: 29.99,
    url: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "a104",
    title: "Blue Color",
    price: 10.25,
    url: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function Store() {
  const { cartModalHandler } = useContext(ModalContext);
  const { isLoggedIn } = useContext(AuthContext);
  const loc = useLocation();

  return (
    <>
      {loc.pathname === "/store" && isLoggedIn && (
        <>
          <div className="bg-secondary mt-5 text-white d-flex flex-column align-items-center py-4">
            <h3
              className="display-4 font-weight-bolder mt-4"
              style={{ fontFamily: "serif" }}
            >
              Welcome to Generics Store
            </h3>
          </div>

          <h1
            className="text-center font-weight-bolder my-5"
            style={{ fontFamily: "serif" }}
          >
            Music
          </h1>

          <Container className={styles.myCards}>
            {STOREDATA.map((item) => {
              return (
                <StoreDataList
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  url={item.url}
                />
              );
            })}
          </Container>

          <div className="text-center mb-5">
            <Button variant="primary" onClick={cartModalHandler}>
              Show Cart
            </Button>
          </div>
        </>
      )}

      {loc.pathname === "/store" && !isLoggedIn && (
        <>
          <h1 className="display-1 mt-5 p-5">Access Denied</h1>
          <h2 className="display-4 p-5">
            Signin/Signup to get access to Store page
          </h2>
        </>
      )}
    </>
  );
}

export default Store;
