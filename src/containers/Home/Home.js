import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Program from '../../components/Program/Program';
import AppCarousel from '../AppCarousel/AppCarousel';
import classes from './Home.module.css';

export default class Home extends Component {
  render() {
    return (
      <div className={classes.Home}>
        <AppCarousel />
        <Container>
          <Col>
            <h1>OUR PROGRAMS</h1>
          </Col>
          <Row>
            <Program
              ProgramImage={require('../../assets/img/YouthVoicesLogo.jpg')}
              ImageAlt="Youth Voices"
              P="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque egestas, turpis a feugiat dictum, augue mauris
              iaculis felis, eget ultrices magna nibh ut lectus."
            />
            <Program
              ProgramImage={require('../../assets/img/VoicesWithoutBorders.png')}
              ImageAlt="Voices Without Borders"
              P="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque egestas, turpis a feugiat dictum, augue mauris
              iaculis felis, eget ultrices magna nibh ut lectus."
            />
          </Row>
        </Container>
      </div>
    );
  }
}
