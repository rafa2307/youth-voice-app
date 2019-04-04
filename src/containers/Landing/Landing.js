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
import ScrollToTop from 'react-router-scroll-top';
import SearchField from 'react-search-field';
import {
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaFacebookSquare
} from 'react-icons/fa';
import classes from './Landing.module.css';

import Home from '../Home/Home';
import Programs from '../Programs/Programs';
import AdultParticipate from '../Participate/Adult/Participate';
import YouthParticipate from '../Participate/Youth/Participate';
import Stories from '../Stories/Stories';
import ContactUs from '../ContactUs/ContactUs';
import AboutUs from '../AboutUs/AboutUs';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    //bind functions, note that collapse is not open from the beginning
    this.toggle = this.toggle.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
      isOpen: false
    };
  }
  //
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  closeNavbar() {
    if (this.state.isOpen === true) {
      this.toggle();
    }
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className={classes.Landing}>
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
                      onClick={this.closeNavbar}
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
                      onClick={this.closeNavbar}
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
                      onClick={this.closeNavbar}
                      className={classes.NavLink}
                      tag={RRNavLink}
                      to="adult-participate"
                      activeClassName="active"
                    >
                      Adult Talk Show
                    </NavLink>
                  </NavItem>
                  <NavItem className={classes.Item}>
                    <NavLink
                      onClick={this.closeNavbar}
                      className={classes.NavLink}
                      tag={RRNavLink}
                      to="youth-participate"
                      activeClassName="active"
                    >
                      Youth Talk Show
                    </NavLink>
                  </NavItem>
                  <NavItem className={classes.Item}>
                    <NavLink
                      onClick={this.closeNavbar}
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
                      onClick={this.closeNavbar}
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
                      onClick={this.closeNavbar}
                      className={classes.NavLink}
                      tag={RRNavLink}
                      to="aboutUs"
                      activeClassName="active"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem className={classes.SocialItem}>
                    <a href="https://www.instagram.com/youthvoicescincinnati/">
                      <FaInstagram className={classes.Instagram} />
                    </a>
                    <a href="https://twitter.com/YouthVoicesOhio">
                      <FaTwitter className={classes.Twitter} />
                    </a>
                    <a href="https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA">
                      <FaYoutube className={classes.Youtube} />
                    </a>
                    <a href="https://www.facebook.com/Youth-Voices-of-Greater-Cincinnati-1621864864582866">
                      <FaFacebookSquare className={classes.Facebook} />
                    </a>
                  </NavItem>
                  <NavItem className={classes.SearchItem}>
                    <SearchField placeholder="Search" />
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
            <hr className={classes.Special} />
            {/* Set routes for app */}
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/programs" exact component={Programs} />
            <Route
              path="/adult-participate"
              exact
              component={AdultParticipate}
            />
            <Route
              path="/youth-participate"
              exact
              component={YouthParticipate}
            />
            <Route path="/stories" exact component={Stories} />
            <Route path="/contactUs" exact component={ContactUs} />
            <Route path="/aboutUs" exact component={AboutUs} />
            <div className={classes.Footer}>
              <ul>
                <li>
                  <NavLink
                    onClick={this.closeNavbar}
                    className={classes.NavLink}
                    tag={RRNavLink}
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={this.closeNavbar}
                    className={classes.NavLink}
                    tag={RRNavLink}
                    to="contactUs"
                  >
                    Contact Us
                  </NavLink>
                  {/* Links for social media */}
                </li>
                <li>
                  <a href="https://twitter.com/">Twitter</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/">Youtube</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}
