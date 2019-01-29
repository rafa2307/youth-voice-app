import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
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

import Home from '../Home/Home';
import Programs from '../Programs/Programs';
import Participate from '../Participate/Participate';
import Stories from '../Stories/Stories';
import ContactUs from '../ContactUs/ContactUs';
import AboutUs from '../AboutUs/AboutUs';

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
      <Router>
        <div className="Landing">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Image</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink tag={Link} to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/programs">
                    Programs
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/participate">
                    Participate
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/stories">
                    Stories
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/contactUs">
                    Contact Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/aboutUs">
                    About Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Route path="/" exact component={Home} />
          <Route path="/programs" exact component={Programs} />
          <Route path="/participate" exact component={Participate} />
          <Route path="/stories" exact component={Stories} />
          <Route path="/contactUs" exact component={ContactUs} />
          <Route path="/aboutUs" exact component={AboutUs} />
        </div>
      </Router>
    );
  }
}
