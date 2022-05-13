import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Row, Navbar, Nav, NavItem } from "reactstrap";
import "../myStyle/styleCartHeader.css";



interface IState {
  numberCart?: any;
  Carts?: any;


}
export class CartHeader extends React.Component<IState> {

  render() {
    return (
      <Row>
        <h2>Shop</h2>
        <Navbar color="light" light expand="md">
          <Nav>
          


            <NavItem>
              <Badge className = "style-cart" color="secondary" badgeContent={this.props.numberCart}>
                <ShoppingCartIcon />
                <Link to="/myCart" ><h3>CART</h3></Link>
              </Badge>





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
    Carts: state._todoProduct.Carts,
  };
};
export default connect(mapStateToProps, null)(CartHeader);
