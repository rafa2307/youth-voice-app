import React from 'react';
import classes from './Program.module.css';
import { Row, Col } from 'reactstrap';

const program = props => {
  return (
    <div className={classes.Program}>
      <Row>
        <Col sm="6">
          <img className={classes.TeamSnip} alt={props.alt} src={props.src} />
        </Col>
        <Col sm="6">
          <div className={classes.Program}>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
          </div>
        </Col>
      </Row>
      <hr />
    </div>
  );
};

export default program;
