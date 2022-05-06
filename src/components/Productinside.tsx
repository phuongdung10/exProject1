import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import '../myStyle/styleProductinside.css';


let url = `${process.env.PUBLIC_URL}/assets/psamsung.svg`;
let url1 = `${process.env.PUBLIC_URL}/assets/star.png`;
let url2 = `${process.env.PUBLIC_URL}/assets/pdetail.svg`;


function Productinside() {
    return (
        <Container>
            <Row>
                <Col sm="3">
                    <img className="pic" src={url} />
                    <img className="pic1" src={url2} />
                </Col>
                <Col className="dis" sm="6">
                    <h3>Điện thoại Samsung Galaxy A31</h3>
                    <h6>Galaxy A31 là mẫu smart phone tầm trung mới ra mắt đầu năm 2020 của Samsung. Thiết bị gây ấn
                        tượng mạnh với ngoại hình thời trang, cụm 4 camera đa chức năng, vân tay dưới màn hình và viên pin
                        khủng lên đến 5000 mAh. </h6>
                    <h3>6 940 000 VND</h3>
                    <img className="star" src={url1} />
                    <img className="star" src={url1} />
                    <img className="star" src={url1} />
                    <img className="star" src={url1} />
                    <img className="star" src={url1} />
                    
                    <br />
                    <Row>
                        <Col><Button type="button" color="primary" className="button" >Mua ngay</Button></Col>
                        <Col><Button type="button" color="success" className="button">Thêm vào giỏ hàng</Button></Col>
                    </Row>
                  
                </Col>






            </Row>
        </Container>


    );
}

export default Productinside;
