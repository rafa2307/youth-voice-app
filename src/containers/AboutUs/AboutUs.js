import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Member from '../../components/Member/Member';

import classes from './AboutUs.module.css';

class AboutUs extends Component {
  constructor() {
    super();
    //set state for about us page
    this.state = {
      currentPage: 1,
      membersPerPage: 8
    };
    //function must be bound
    this.handleClick = this.handleClick.bind(this);
  }
  //function to keep track of current page in pagination
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    //determine pagination details
    const { members } = this.props;
    const { currentPage, membersPerPage } = this.state;
    const indexOfLastMember = currentPage * membersPerPage;
    const indexOfFirstMember = indexOfLastMember - membersPerPage;
    const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

    //render lists of components or elements
    const renderMembers = currentMembers.map((member, index) => {
      return (
        <Col key={index} md="3">
          <Member alt={member.alt} src={member.img} text={member.info} />
        </Col>
      );
    });

    //determine number of pages
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
          <Row>
            {renderMembers}
            <Col>
              <div className={classes.Pages}>{renderPageNumbers}</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    members: state.members
  };
};

export default connect(mapStateToProps)(AboutUs);
