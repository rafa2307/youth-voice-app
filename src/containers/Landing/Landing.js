import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink as RRNavLink
} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import SearchField from 'react-search-field';
import { FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa';
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
            <NavbarBrand href="/">
              <img
                className="logo"
                alt="Youth Voice Logo"
                src={require('../../assets/img/Logo.png')}
              />

              <img
                className="youth-voice-img"
                alt="Youth Voice"
                src={require('../../assets/img/YouthVoices.png')}
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem className="item">
                  <NavLink tag={RRNavLink} to="/home" activeClassName="active">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem className="item">
                  <NavLink
                    tag={RRNavLink}
                    to="programs"
                    activeClassName="active"
                  >
                    Programs
                  </NavLink>
                </NavItem>
                <NavItem className="item">
                  <NavLink
                    tag={RRNavLink}
                    to="participate"
                    activeClassName="active"
                  >
                    Participate
                  </NavLink>
                </NavItem>
                <NavItem className="item">
                  <NavLink
                    tag={RRNavLink}
                    to="stories"
                    activeClassName="active"
                  >
                    Stories
                  </NavLink>
                </NavItem>
                <NavItem className="item">
                  <NavLink
                    tag={RRNavLink}
                    to="contactUs"
                    activeClassName="active"
                  >
                    Contact Us
                  </NavLink>
                </NavItem>
                <NavItem className="item">
                  <NavLink
                    tag={RRNavLink}
                    to="aboutUs"
                    activeClassName="active"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem className="social-item">
                  <FaFacebook />
                  <FaTwitter />
                  <FaYoutube />
                </NavItem>
                <NavItem className="search-item">
                  <SearchField placeholder="Search item" />
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
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
