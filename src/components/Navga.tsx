import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
let url=`${process.env.PUBLIC_URL}/assets/shop.svg`;
let url1 = `${process.env.PUBLIC_URL}/assets/cart.svg`;
let url2=`${process.env.PUBLIC_URL}/assets/myprofile.svg`;



const Navga = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Menu</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink><img src={url} />Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink><img src={url1} />Cart</NavLink>
            </NavItem>
            <NavItem>
              <NavLink><img src={url2} />My Profile</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navga;
