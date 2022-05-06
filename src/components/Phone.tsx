import { hasUncaughtExceptionCaptureCallback } from "process";
import React from "react";
import PostData from '../data/arrayPhone.json';
import { Container, Row, Col } from 'reactstrap';
import '../myStyle/stylePhone.css';


let url = `${process.env.PUBLIC_URL}/assets/samsung.svg`;
let url1 = `${process.env.PUBLIC_URL}/assets/star.png`;



function Phone() {
    return (
        <div>
            {PostData.map((postDetail, index) => {
                return <div className="phone">
                    <Container>
                        <Row>
                            <Col sm="5"> <button onClick={() => window.location.assign('/product')}><img src={`${process.env.PUBLIC_URL}/assets/${postDetail.src}`} /></button></Col>
                            <Col sm="7" className="phone1">
                                <h3>{postDetail.title}</h3>
                                <h2>{postDetail.content}</h2>
                                <img className="star" src={url1} />
                                <img className="star" src={url1} />
                                <img className="star" src={url1} />
                                <img className="star" src={url1} />
                                <img className="star" src={url1} />
                                

                            </Col>

                        </Row>
                    </Container>
                    {/* <h1>{postDetail.title}</h1>
                        <p>{postDetail.content}</p>
                        <img src={`${process.env.PUBLIC_URL}/assets/${postDetail.src}`} /> */}

                </div>
            })}
        </div>

    );
}
export default Phone;
