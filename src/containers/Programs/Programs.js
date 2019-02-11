import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Program from '../../components/Program/Program';
import classes from './Programs.module.css';
export default class Programs extends Component {
  constructor() {
    super();
    this.state = {
      programs: [
        {
          src: require('../../assets/img/Aboutteamsnip.png'),
          alt: 'team snip',
          title: 'Title',
          text:
            'Sunt consectetur ipsum irure in sint minim tempor elit consequat ut esse eu fugiat. Deserunt Lorem labore in veniam qui laboris. Nostrud non ipsum enim consequat ipsum deserunt reprehenderit. Aute ex duis tempor occaecat qui aliqua.'
        },
        {
          src: require('../../assets/img/Aboutteamsnip.png'),
          alt: 'team snip',
          title: 'Title',
          text:
            'Sunt consectetur ipsum irure in sint minim tempor elit consequat ut esse eu fugiat. Deserunt Lorem labore in veniam qui laboris. Nostrud non ipsum enim consequat ipsum deserunt reprehenderit. Aute ex duis tempor occaecat qui aliqua.'
        },
        {
          src: require('../../assets/img/Aboutteamsnip.png'),
          alt: 'team snip',
          title: 'Title',
          text:
            'Sunt consectetur ipsum irure in sint minim tempor elit consequat ut esse eu fugiat. Deserunt Lorem labore in veniam qui laboris. Nostrud non ipsum enim consequat ipsum deserunt reprehenderit. Aute ex duis tempor occaecat qui aliqua.'
        }
      ]
    };
  }
  render() {
    const { programs } = this.state;
    const renderPrograms = programs.map((program, index) => {
      return (
        <Program
          key={index}
          src={program.src}
          title={program.title}
          alt={program.alt}
          text={program.text}
        />
      );
    });
    return (
      <div className={classes.Programs}>
        <Container className={classes.Container}>
          <h2 className={classes.Header}>About Our Programs</h2>
          {renderPrograms}
        </Container>
      </div>
    );
  }
}
