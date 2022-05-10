import React from "react";
import "../myStyle/styleLogin.css";
import {
  Col,
  Row,
  Form,
  FormGroup,
} from "reactstrap";

import Shop from "./Shop";

let url1 = `${process.env.PUBLIC_URL}/assets/login2.svg`;
let url2 = `${process.env.PUBLIC_URL}/assets/login3.svg`;
let url3 = `${process.env.PUBLIC_URL}/assets/login4.svg`;
let url4 = `${process.env.PUBLIC_URL}/assets/login5.png`;

function Login() {
  return (
    <div className="login-user">
      <div className="header">
        <div className="logo">
          <img className="logo1" src={url1} />
        </div>
      </div>
      <div className="login1-user">
        <Form className="form">
          <div className="icon">
            <i>
              <img src={url2} />
            </i>

            <i>
              <img className="logo2" src={url3} />
            </i>
            <input className="input1" type="email" placeholder="Tên đăng nhập" />
          </div>
        </Form>

        <Form className="form">
          <div className="icon1">
            <i>
              <img src={url2} />
            </i>
            <i>
              <img className="logo3" src={url4} />
            </i>
            <input className="input1" type="password" placeholder="Mật khẩu" />
          </div>
        </Form>
        <FormGroup row>
          <Col>
            <input className="save" type="checkbox" />
            {"    "}
            <span className="white">Lưu đăng nhập</span>
          </Col>
          <Col>
            <button className="save">Bạn quên mật khẩu ?</button>
          </Col>
        </FormGroup>
        {/* <Link to={'/shop'} className="dis-accept">Đăng nhập</Link> */}
        <button className="dis-accept" onClick={() => window.location.assign('/shop')}>Đăng nhập</button>

        <div className="dis-text">
          <p>
            Nếu bạn có thắc mắc hay cần giải đáp, vui lòng liên hệ số điện thoại
            19001000
          </p>

          <p>Bản quyền thuộc về AnyBim</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
