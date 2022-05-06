import React, { Component } from 'react';
import Phone from './Phone';
import { Container, Row, Col } from 'reactstrap';


function AllPhone(){
    return(
        <Container>
            <Row>
                <Col xs="6"><Phone /></Col>
                <Col xs="6"><Phone /></Col>
            </Row>
        </Container>

    );
}

export default AllPhone
