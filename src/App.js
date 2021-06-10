import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { toast, ToastContainer } from "react-toastify";
import BuySection from "./components/BuySection";
import Cart from "./components/Cart";

import { Container, Row, Col } from "reactstrap";
const App = () => {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });

    if (isAlreadyAdded !== -1) {
      toast("alerady added in Cart.", {
        type: "error",
      });
      return;
    }

    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);
    toast("Purchase Complete", { type: "success" });
  };

  const removeItem = (item) => {
    setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md={8}>
          <BuySection addInCart={addInCart} />
        </Col>
        <Col md={4}>
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
