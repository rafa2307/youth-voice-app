import React from 'react';

import { NavLink as RRNavLink } from 'react-router-dom';
import { Col, NavLink } from 'reactstrap';
import classes from './HomeProgram.module.css';

const program = props => (
  <Col md="6" lg="6" className={classes.Program}>
    <img src={props.ProgramImage} alt={props.ImageAlt} />
    <p>{props.P}</p>
    <NavLink tag={RRNavLink} to="programs" activeClassName="active">
      Learn More
    </NavLink>
  </Col>
);

export default program;
