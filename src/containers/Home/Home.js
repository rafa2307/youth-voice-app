import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Program from '../../components/HomeProgram/HomeProgram';
import AppCarousel from '../AppCarousel/AppCarousel';
import classes from './Home.module.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      programs: [
        {
          img: require('../../assets/img/YouthVoicesLogo.jpg'),
          alt: 'Youth Voices',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque egestas, turpis a feugiat dictum, augue maurisiaculis felis, eget ultrices magna nibh ut lectus.'
        },
        {
          img: require('../../assets/img/YouthVoicesLogo.jpg'),
          alt: 'Youth Voices',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque egestas, turpis a feugiat dictum, augue maurisiaculis felis, eget ultrices magna nibh ut lectus.'
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
          ProgramImage={program.img}
          ImageAlt={program.alt}
          P={program.text}
        />
      );
    });

    return (
      <div className={classes.Home}>
        <AppCarousel />
        <Container>
          <Col>
            <h1>OUR PROGRAMS</h1>
          </Col>
          <Row>{renderPrograms}</Row>
        </Container>
      </div>
    );
  }
}
