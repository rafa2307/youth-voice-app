import React from 'react';

import classes from './FormCard.module.css';

const formCard = props => (
  <div className={classes.FormCard}>
    <span className={classes.CardTitle}>Email:</span>
    <br />
    <span className={classes.Email}>{props.email}</span>
    <br />
    <span className={classes.CardTitle}>Address:</span>{' '}
    <span>{props.address}</span>
    <br />
    <span className={classes.CardTitle}>Parking:</span>{' '}
    <span>{props.parking}</span>
    <br />
    <span className={classes.CardTitle}>Arrival Time:</span>{' '}
    <span>{props.arrival}</span>
    <br />
    <span className={classes.CardTitle}>Directions:</span>{' '}
    <span>{props.directions}</span>
  </div>
);

export default formCard;
