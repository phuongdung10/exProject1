import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../myStyle/styleNavga.css';
import { Link, useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";


let url = `${process.env.PUBLIC_URL}/assets/shop.svg`;
let url1 = `${process.env.PUBLIC_URL}/assets/cart.svg`;
let url2 = `${process.env.PUBLIC_URL}/assets/myprofile.svg`;






function Navga  () {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const history = useHistory();

  return (
    <Switch>


      <Navbar>
        <NavbarBrand href="/"><h1>Menu</h1></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />

        <Nav navbar>

          <NavLink href="/shop"><img className='icon-navga' src={url} />Shop</NavLink>

          {/* <NavLink href="/cart"><img className = 'icon-navga' src={url1}/>Cart</NavLink> */}


          <NavLink href="/profile"><img className='icon-navga' src={url2} />My Profile</NavLink>

        </Nav>

      </Navbar>
    </Switch>
  );

  }

export default Navga;
