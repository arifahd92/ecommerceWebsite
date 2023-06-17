import { useContext, useReducer } from "react";
import CartContext from "./cart-context";
import ModalContext from "./modal-context";

//!Reducer function
function reducer(state, actions) {
  let { items } = state;

  if (actions.type === "add") {
    const { key, url, title, price } = actions.payload;

    if (key in items) {
      items[key].count++;
    } else {
      items[key] = {
        count: 1,
        url,
        title,
        price,
      };
    }
  }

  if (actions.type === "remove") {
    const { key } = actions.payload;

    if (items[key].count > 1) {
      items[key].count--;
    } else {
      delete items[key];
    }
  }

  if (actions.type === "purchase") {
    if (Object.keys(items).length > 0) {
      items = {};
      actions.payload.alertModalHandler(
        "Purchase Successful",
        "All items purchased.",
        "green"
      );
    } else {
      actions.payload.alertModalHandler(
        "Purchase Failed",
        "No items to purchase. Please add some items!!!",
        "red"
      );
    }
  }

  return {
    items: items,
    totalItems: calcTotalItems(items),
    totalPrice: calcTotalPrice(items),
  };
}

// !Calculate total price
function calcTotalPrice(items) {
  let tPrice = 0;

  for (const key in items) {
    tPrice += items[key].price * items[key].count;
  }

  return tPrice;
}

// !Calculate total items
function calcTotalItems(items) {
  let tCount = 0;

  for (const key in items) {
    tCount += items[key].count;
  }

  return tCount;
}

//! Actual component
function CartContextProvider(props) {
  const reducerInitialState = {
    items: {},
    totalItems: 0,
    totalPrice: 0,
  };

  const [state, dispatch] = useReducer(reducer, reducerInitialState);
  const { alertModalHandler } = useContext(ModalContext);

  const addItem = (key, url, title, price) => {
    dispatch({ type: "add", payload: { key, url, title, price } });
  };

  const removeItem = (key) => {
    dispatch({ type: "remove", payload: { key } });
  };

  const purchaseHandler = () => {
    dispatch({ type: "purchase", payload: { alertModalHandler } });
  };

  const cartContext = {
    ...state,
    addItem,
    removeItem,
    purchaseHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
