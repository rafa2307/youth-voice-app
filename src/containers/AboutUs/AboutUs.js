import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import classes from './AboutUs.module.css';

export default class AboutUs extends Component {
  state = {
    emp: [
      {
        img: 'Aboutteamsnip',
        info:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
      },
      {
        img: 'Aboutteamsnip',
        info: 'test info'
      },
      {
        img: 'Aboutteamsnip',
        info: 'test info'
      },
      {
        img: 'Aboutteamsnip',
        info:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
      },
      {
        img: 'Aboutteamsnip',
        info:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
      },
      {
        img: 'Aboutteamsnip',
        info:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
      },
      {
        img: 'Aboutteamsnip',
        info:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
      },
      {
        img: 'Aboutteamsnip',
        info:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
      },
      {
        img: 'Aboutteamsnip',
        info:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
      },
      {
        img: 'Aboutteamsnip',
        info: 'test info'
      },
      {
        img: 'Aboutteamsnip',
        info: 'test info'
      },
      {
        img: 'Aboutteamsnip',
        info:
          ' dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
      }
    ]
  };

  render() {
    const elements = this.state.emp.map((ele, i) => (
      <Col key={i} md="3">
        <div className={classes.Member}>
          <img alt={ele.img} src={require('../../assets/img/images.png')} />
          <p>{ele.info}</p>
        </div>
      </Col>
    ));

    return (
      <div className={classes.AboutUs}>
        <div className={classes.Header}>
          <h2 className={classes.Header}>About Our Team</h2>
        </div>
        <Container>
          <Row>{elements}</Row>
        </Container>
      </div>
    );
  }
}
