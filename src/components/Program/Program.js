import React from 'react';
import classes from './Program.module.css';
import { Col } from 'reactstrap';

const program = props => {
  return (
    <Col sm="6">
      <img className={classes.TeamSnip} alt={props.alt} src={props.src} />
    </Col>
  );
};

export default program;
