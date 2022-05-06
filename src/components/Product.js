import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import MyShop from "./MyShop";
import MyCart from "./MyCart";
import CartHeader from "./CartHeader";
import Header from "./Header";
import { Container, Row, Col, Navbar } from "reactstrap";
import Navga from "./Navga";

function Product() {
  return (
    <Router>
      <Container className="themed-container" fluid={true}>
        <Header />
        <Row>
          <Col sm="2">
            <Navga />
          </Col>
          <Col sm="10">
            <CartHeader />
            {/* <Switch>
              <Route path="/" exact component={MyShop} />
              <Route path="/cart" exact component={MyCart} />
            </Switch>            */}
            <MyShop />
            <MyCart />
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default Product;
