import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../store/cart-context";

import styles from "../pages/Store.module.css";
import { Link } from "react-router-dom";

function StoreDataList(props) {
  const { addItem } = useContext(CartContext);

  return (
    <div>
      <h3
        className="text-center font-weight-bolder"
        style={{ fontFamily: "serif" }}
      >
        {props.title}
      </h3>
      <div
        style={{ width: "16rem" }}
        className={`m-auto ${styles["myCards-image"]}`}
      >
        <Link to={`/products/${props.id}`}>
          <img
            variant="top"
            src={props.url}
            style={{ width: "16rem" }}
            alt={props.title}
          />
        </Link>
      </div>
      <div className="d-flex align-items-center justify-content-between my-3">
        <p style={{ fontFamily: "serif", paddingTop: "12px" }}>
          ${props.price.toFixed(2)}
        </p>
        <Button
          variant="info"
          className="btn-sm"
          onClick={() => {
            addItem(props.id, props.url, props.title, props.price);
          }}
        >
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}

export default StoreDataList;
