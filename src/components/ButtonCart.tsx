import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../myStyle/styleButtonCart.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

let url = `${process.env.PUBLIC_URL}/assets/samsung.svg`;

function ButtonCart({}) {
  const [myState, setMyState] = React.useState(1);

  // THE setState CALLS CAN BE ANYWHERE
  function changeCounter(value: string) {
    if (value === "increment") {
      setMyState((prevState) => prevState + 6940000);
    } else if (value === "decrement") {
      setMyState((prevState) => Math.max(prevState - 6940000, 0));
    }
  }

  const [myState1, setMyState1] = React.useState(1);

  function changeCounter1(value: string) {
    if (value == "increment") {
      setMyState1((prevState1) => prevState1 + 6940000);
    } else if (value == "decrement") {
      setMyState1((prevState1) => Math.max(prevState1 - 6940000, 0));
    }
  }

  return (
    <Container>
      <Col>
        <Row>
          <Col sm="3" className="ac">
            <img src={url} />
          </Col>
          <Col sm="5">
            <h3>Điện thoại Samsung Galaxy A31</h3>
            <h6>
              Galaxy A31 là mẫu smart phone tầm trung mới ra mắt đầu năm 2020
              của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang,
              cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng
              lên đến 5000 mAh.{" "}
            </h6>
            <h2>6 940 000 VND</h2>
          </Col>
          <Col>
            <Col>
              <h5 className="top">
                {" "}
                <Button onClick={() => changeCounter("decrement")}>-</Button>
                {""} {myState}{" "}
                <Button onClick={() => changeCounter("increment")}>+</Button>
              </h5>
            </Col>
          </Col>
          <Col sm="3" className="ac">
            <img src={url} />
          </Col>
          <Col sm="5">
            <h3>Điện thoại Samsung Galaxy A31</h3>
            <h6>
              Galaxy A31 là mẫu smart phone tầm trung mới ra mắt đầu năm 2020
              của Samsung. Thiết bị gây ấn tượng mạnh với ngoại hình thời trang,
              cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin khủng
              lên đến 5000 mAh.{" "}
            </h6>
            <h2>6 940 000 VND</h2>
          </Col>

          <Col>
            <h5 className="top">
              {" "}
              <Button onClick={() => changeCounter1("decrement")}>-</Button>
              {""} {myState1}{" "}
              <Button onClick={() => changeCounter1("increment")}>+</Button>
            </h5>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col sm="4"></Col>
          <Col sm="4"></Col>
          <Col sm="4">
            <h5>SubTotal {myState + myState1} VND</h5>

            <h5>Tax 1 388 000 VND </h5>
            <h5>Total {myState + myState1 + 1388000} VND</h5>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default ButtonCart;
