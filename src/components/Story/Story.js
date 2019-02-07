import React from 'react';

import classes from './Story.module.css';

const story = props => (
  <div className={classes.Story}>
    <h3>{props.header}</h3>
    <iframe src={props.src} title={props.title} />
    <p>{props.text}</p>
  </div>
);

export default story;
