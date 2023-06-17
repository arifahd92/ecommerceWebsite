import { createContext } from "react";

const CartContext = createContext({
  totalItems: 0,
  items: {},
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
  purchasehandler: () => {},
});

export default CartContext;
