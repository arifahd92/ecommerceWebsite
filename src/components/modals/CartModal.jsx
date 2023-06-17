import { useContext } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import CartContext from "../store/cart-context";
import ModalContext from "../store/modal-context";
import CartModalData from "../dataLists/CartModalData";

function CartModal() {
  const { showCartModal, cartModalHandler } = useContext(ModalContext);
  const { items, totalPrice, purchaseHandler } = useContext(CartContext);

  const itemsArr = [];
  for (const key in items) {
    itemsArr.push({ [key]: items[key], key: key });
  }

  return (
    <>
      <Modal
        show={showCartModal}
        onHide={cartModalHandler}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header className="d-flex justify-content-center py-4">
          <Modal.Title
            className="display-4 font-weight-bolder"
            style={{ fontFamily: "serif" }}
          >
            Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table responsive="sm" borderless>
            <thead className="border-bottom">
              <tr>
                <th>ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>ADD/REMOVE</th>
              </tr>
            </thead>
            <tbody>
              {itemsArr.map((item) => {
                let key = item.key;
                return (
                  <CartModalData
                    key={item.key}
                    id={item.key}
                    count={item[key].count}
                    title={item[key].title}
                    price={item[key].price}
                    url={item[key].url}
                  />
                );
              })}
            </tbody>
          </Table>

          <h4
            className="font-weight-bolder float-right mr-5"
            style={{ fontFamily: "serif" }}
          >
            Total Price : $<span>{totalPrice}</span>
          </h4>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="secondary" onClick={cartModalHandler}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              purchaseHandler();
            }}
          >
            Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal;
