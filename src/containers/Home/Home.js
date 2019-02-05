import React, { Component } from 'react';
import AppCarousel from '../AppCarousel/AppCarousel';
import classes from './Home.module.css';

export default class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        <AppCarousel />
      </div>
    );
  }
}
