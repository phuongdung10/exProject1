import React from "react";
import MyShop from "./MyShop";
import MyCart from "./MyCart";
import CartHeader from "./CartHeader";
import Header from "./Header";
import { Container, Row, Col, Navbar } from "reactstrap";
import Navga from "./Navga";

function Product() {
  return (

      <Container className="themed-container" fluid={true}>
        <Header />
        <Row>
          <Col sm="2">
            <Navga />
          </Col>
          <Col sm="10">
            <CartHeader />
            <MyShop />
            <MyCart />
  

          </Col>
        </Row>
      </Container>
  );
}

export default Product;
