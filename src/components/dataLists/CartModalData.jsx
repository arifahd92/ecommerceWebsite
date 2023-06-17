import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../store/cart-context";

function CartModalData(props) {
  const { addItem, removeItem } = useContext(CartContext);

  return (
    <tr className="border-bottom">
      <td>
        <img src={props.url} alt="Colors" style={{ width: "50px" }} />{" "}
        {props.title}
      </td>
      <td>${props.price}</td>
      <td>{props.count}</td>
      <td>
        <Button
          variant="danger"
          className="mr-5"
          onClick={() => {
            removeItem(props.id);
          }}
        >
          -
        </Button>
        <Button
          variant="success"
          onClick={() => {
            addItem(props.id, props.url, props.title, props.price);
          }}
        >
          +
        </Button>
      </td>
    </tr>
  );
}

export default CartModalData;
