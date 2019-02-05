import React from 'react';
import classes from './Program.module.css';
import { Row, Col } from 'reactstrap';

const program = props => {
  return (
    <>
      <Row>
        <Col sm="6">
          <img
            className={classes.TeamSnip}
            alt="team snip"
            src={require('../../assets/img/Aboutteamsnip.png')}
          />
        </Col>
        <Col sm="6">
          <div className={classes.Program}>
            <label>Label</label>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque egestas, turpis a feugiat dictum, augue mauris
              iaculis felis, eget ultrices magna nibh ut lectus.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Pellentesque egestas,
              turpis a feugiat dictum
            </p>
            <label>Label</label>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque egestas, turpis a feugiat dictum, augue mauris
              iaculis felis, eget ultrices magna nibh ut lectus.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Pellentesque egestas,
              turpis a feugiat dictum
            </p>
          </div>
        </Col>
      </Row>
      <hr />
    </>
  );
};

export default program;
