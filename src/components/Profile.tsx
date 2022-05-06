import React from "react";
import '../myStyle/styleProfile.css';
import Header from './Header';
import Navga from "./Navga";
import { Container, Row, Col } from 'reactstrap';

let url = `${process.env.PUBLIC_URL}/assets/profile.svg`;
let url1 = `${process.env.PUBLIC_URL}/assets/profile1.svg`;

function Profile() {
    return (
        <div>
            <Header />
            <Container className="themed-container" fluid={true}>
                <Row>
                    <Col sm="2"><Navga /></Col>
                    <Col>
                        <h3 className="text">My Profile</h3>
                        <br />
                        <br />
                        <br />
                        <Row>
                            <Col sm="4">
                                <img className="profile" src={url} />
                                <br />
                                <br />


                                <div className="text3">
                                    <p>Data of birth:</p>
                                    <p>Sex:</p>
                                    <p>Company:</p>
                                    <p>Home:</p>
                                </div>
                            </Col>
                            <Col sm="8">
                                <h3 className="text1">MR. USER </h3>
                                <br />
                                <p className="text2">Email: user@gmail.com</p>
                             
                               
                                <div className="text4">
                                    <div className="text5">01/01/2018 <img className="profile1" src={url1} /></div>
                                    <p>Male</p>
                                   <p className="text5">15, Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội  </p>
                                   <p className="text5">15, Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội  </p>
                                </div>

                            </Col>
                        </Row>


                    </Col>
                </Row>


            </Container>

        </div>

    );
}

export default Profile;
