import React from "react";
import MyShop from "./MyShop";
import CartHeader from "./CartHeader";
import Header from "./Header";
import { Container, Row, Col, Navbar } from "reactstrap";
import Navga from "./Navga";
import MyCart from "./MyCart";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

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
            <MyShop />
            <Switch>
             
              <Route path = "/myCart" exact component = {MyCart} />

            </Switch>
           

      

            
          
        
      
  

          </Col>
        </Row>
      </Container>
      </Router>
   
  );
}

export default Product;
