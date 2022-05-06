import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Row, Navbar, Nav, NavItem } from "reactstrap";
import "../myStyle/styleCartHeader.css";

interface IState {
  numberCart?: any;
}
export class CartHeader extends Component<IState> {
  render() {
    return (
      <Row>
        <h2>Shop</h2>
        <Navbar color="light" light expand="md">
          <Nav>
            <NavItem>
              <Link to="/" className="header">Shop/Product</Link>
            </NavItem>
            <NavItem>
              <Link to="/" className="header">
                <Badge color="secondary" badgeContent={this.props.numberCart}>
                  <ShoppingCartIcon />{" "}
                </Badge>
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </Row>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    numberCart: state._todoProduct.numberCart,
  };
};
export default connect(mapStateToProps, null)(CartHeader);
