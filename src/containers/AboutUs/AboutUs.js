import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import classes from './AboutUs.module.css';

export default class AboutUs extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      membersPerPage: 8,
      members: [
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { members, currentPage, membersPerPage } = this.state;
    const indexOfLastMember = currentPage * membersPerPage;
    const indexOfFirstMember = indexOfLastMember - membersPerPage;
    const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

    const renderMembers = currentMembers.map((member, index) => {
      return (
        <Col key={index} md="3">
          <div className={classes.Member}>
            <img
              alt={member.img}
              src={require('../../assets/img/images.png')}
            />
            <p>{member.info}</p>
          </div>
        </Col>
      );
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(members.length / membersPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      const isActive =
        number === this.state.currentPage
          ? classes.PageNumberActive
          : classes.PageNumberNotActive;
      return (
        <li
          key={number}
          id={number}
          className={isActive}
          onClick={this.handleClick}
        >
          &bull;
        </li>
      );
    });

    return (
      <div className={classes.AboutUs}>
        <div className={classes.Header}>
          <h2 className={classes.Header}>About Our Team</h2>
        </div>
        <Container>
          <Row>{renderMembers}</Row>
          <div className={classes.Pages}>{renderPageNumbers}</div>
        </Container>
      </div>
    );
  }
}
