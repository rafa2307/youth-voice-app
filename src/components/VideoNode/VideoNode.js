import React from 'react';

import classes from './VideoNode.module.css';

const videoNode = props => (
  <div className={classes.VideoNode}>
    <p>{props.title}</p>
    <iframe title={props.title} src={props.src} />
  </div>
);

export default videoNode;
