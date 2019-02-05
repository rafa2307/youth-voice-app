import React from 'react';

import classes from './NewsNode.module.css';

const newsNode = props => (
  <div className={classes.NewsNode}>
    <img src={props.img} alt={props.alt} />
    <p>{props.text}</p>
  </div>
);

export default newsNode;
