import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import '../myStyle/styleNavga.css';

let url = `${process.env.PUBLIC_URL}/assets/shop.svg`;
let url1 = `${process.env.PUBLIC_URL}/assets/cart.svg`;
let url2 = `${process.env.PUBLIC_URL}/assets/myprofile.svg`;




const Navga = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
{/* //       <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
//   <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
//   <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
//   <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
//   <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
// </div>
// <div className="tab-content" id="v-pills-tabContent">
//   <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
//   <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
//   <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
//   <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
// </div> */}


      <Navbar>
        <NavbarBrand href="/"><h1>Menu</h1></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        {/* <Collapse isOpen={!collapsed} navbar> */}
          <Nav navbar>
            <NavItem>
              <NavLink href="#"><img className='icon' src={url} />Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><img className='icon' src={url1} />Cart</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><img className='icon' src={url2} />My Profile</NavLink>
            </NavItem>
          </Nav>
        {/* </Collapse> */}
      </Navbar>
    </div>
  );
}

export default Navga;
