import React, { Component } from 'react';
import { Col } from 'reactstrap';
import classes from './Participate.module.css';

import AppForm from '../AppForm/AppForm';

export default class Participate extends Component {
  render() {
    return (
      <div className={classes.Participate}>
        <div className={classes.AdultDiv}>
          <h2 className={classes.Header}>Adult Application</h2>
          <h2 className={classes.Header}>/</h2>
          <h2 className={classes.StudentHeader}>Student Application</h2>
        </div>

        <div className={classes.divBanner}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget
          ultrices magna nibh ut lectus.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque egestas, turpis a feugiat dictum, augue
          mauris iaculis felis, eget ultrices magna nibh ut lectus.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Pellentesque egestas,
          turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices
          magna nibh ut lectus.
        </div>
        <Col md="6">
          <AppForm />
        </Col>
      </div>
    );
  }
}
