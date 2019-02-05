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
import classes from './Landing.module.css';

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
          <Navbar light expand="xl">
            <NavbarBrand href="/">
              <img
                className={classes.Logo}
                alt="Youth Voice Logo"
                src={require('../../assets/img/Logo.png')}
              />

              <img
                className={classes.YouthVoiceImg}
                alt="Youth Voice"
                src={require('../../assets/img/YouthVoices.png')}
              />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem className={classes.Item}>
                  <NavLink
                    className={classes.NavLink}
                    tag={RRNavLink}
                    to="/home"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem className={classes.Item}>
                  <NavLink
                    className={classes.NavLink}
                    tag={RRNavLink}
                    to="programs"
                    activeClassName="active"
                  >
                    Programs
                  </NavLink>
                </NavItem>
                <NavItem className={classes.Item}>
                  <NavLink
                    className={classes.NavLink}
                    tag={RRNavLink}
                    to="participate"
                    activeClassName="active"
                  >
                    Participate
                  </NavLink>
                </NavItem>
                <NavItem className={classes.Item}>
                  <NavLink
                    className={classes.NavLink}
                    tag={RRNavLink}
                    to="stories"
                    activeClassName="active"
                  >
                    Stories
                  </NavLink>
                </NavItem>
                <NavItem className={classes.Item}>
                  <NavLink
                    className={classes.NavLink}
                    tag={RRNavLink}
                    to="contactUs"
                    activeClassName="active"
                  >
                    Contact Us
                  </NavLink>
                </NavItem>
                <NavItem className={classes.Item}>
                  <NavLink
                    className={classes.NavLink}
                    tag={RRNavLink}
                    to="aboutUs"
                    activeClassName="active"
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem className={classes.SocialItem}>
                  <FaFacebook className={classes.Facebook} />
                  <FaTwitter className={classes.Twitter} />
                  <FaYoutube className={classes.Youtube} />
                </NavItem>
                <NavItem className={classes.SearchItem}>
                  <SearchField placeholder="Search item" />
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <hr className={classes.Special} />
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/programs" exact component={Programs} />
          <Route path="/participate" exact component={Participate} />
          <Route path="/stories" exact component={Stories} />
          <Route path="/contactUs" exact component={ContactUs} />
          <Route path="/aboutUs" exact component={AboutUs} />
          <div className={classes.Footer}>
            <ul>
              <li>
                <NavLink className={classes.NavLink} tag={RRNavLink} to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={classes.NavLink}
                  tag={RRNavLink}
                  to="contactUs"
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <a href="https://twitter.com/">Twitter</a>
              </li>
              <li>
                <a href="https://www.youtube.com/">Youtube</a>
              </li>
              <li>
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </Router>
    );
  }
}
