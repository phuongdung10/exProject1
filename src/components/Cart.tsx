import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import MyShop from "./MyShop";
import MyCart from "./MyCart";
import CartHeader from "./CartHeader";
import Header from "./Header";
import { Container, Row, Col, Navbar } from "reactstrap";
import Navga from "./Navga";





function Cart(): JSX.Element {
   return (
      <Container className="themed-container" fluid={true}>
         <Header />
         <Row>
            <Col sm="2"><Navga /></Col>
            <Col sm="10">
               <h2>Cart</h2>
            <MyCart />
            </Col>
         </Row>

     
      </Container>
     
   );
}

export default Cart;
