import React from 'react';

import classes from './Member.module.css';

const member = props => (
  <div className={classes.Member}>
    <img src={props.src} alt={props.alt} />
    <p>{props.text}</p>
  </div>
);

export default member;
