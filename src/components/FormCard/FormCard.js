import React from 'react';

import classes from './FormCard.module.css';

const formCard = props => (
  <div className={classes.FormCard}>
    <span className={classes.CardTitle}>Email:</span> <span>{props.email}</span>
    <br />
    <span className={classes.CardTitle}>Address:</span>{' '}
    <span>{props.address}</span>
  </div>
);

export default formCard;
