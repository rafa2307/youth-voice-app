import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Program from '../../components/Program/Program';
import classes from './Programs.module.css';
export default class Programs extends Component {
  render() {
    return (
      <Container className={classes.Container}>
        <div className={classes.Programs}>
          <h2 className={classes.Header}>About Our Programs</h2>
          <Program />
          <Program />
        </div>
      </Container>
    );
  }
}
