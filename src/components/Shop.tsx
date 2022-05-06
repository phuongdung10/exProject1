import React from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import AllPhone from "./AllPhone";
import Header from "./Header";
import "../myStyle/styleShop.css";
import Navga from "./Navga";
import Filter from "./Filter";
let url = `${process.env.PUBLIC_URL}/assets/inShop1.svg`;
let url1 = `${process.env.PUBLIC_URL}/assets/inShop2.svg`;

function Shop(this: any) {
  return (
    <div>
      <Header />
      <Container className="themed-container" fluid={true}>
        <Row>
          <Col sm="2">
            <Navga />
          </Col>
          <Col sm="10">
            <h2 className="shop">Shop</h2>
            <Row>
              <Col sm="6">
                {" "}
                <h4>Shop</h4>
              </Col>
              <Col sm="6">
                <InputGroup>
                  <Input className="len" placeholder="Search..." />
                  {/* <InputGroupAddon addonType="append"> */}
                  <InputGroupText>
                    <img className="button" src={url} />
                    <button onClick={() => window.location.assign("/filter")}>
                      <img className="button" src={url1} />
                    </button>
                  </InputGroupText>
                  {/* </InputGroupAddon> */}
                </InputGroup>
              </Col>
              {/* <Col>
                                <Button className="button"><img src={url} /></Button>
                                <Button className="button dis" onClick={() => <Filter />}><img src={url1} /></Button>
                            </Col> */}
            </Row>
            <hr />
            <AllPhone />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Shop;
