import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './Landing.css';

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="Landing">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Image</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Programs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Participate</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Stories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">About Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
