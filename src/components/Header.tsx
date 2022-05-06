import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import '../myStyle/styleHeader.css';



let url = `${process.env.PUBLIC_URL}/assets/Shop1.svg`;
let url1 = `${process.env.PUBLIC_URL}/assets/Shop2.svg`;

class Header extends Component {
    render() {
        return (
            <div className="banner">
                <Container className="themed-container" fluid={true}>
                    <Row>


                        <Col sm="1"><img className="shop1" src={url} /></Col>
                        <Col sm="10"><h3 className="shop2">Mobile Shopping</h3></Col>
                        <Col sm="1"><img className="shop1"src={url1} /></Col>

                    </Row>

                </Container>
            </div>


        );
    }
}

export default Header;
