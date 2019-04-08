import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

import classes from './AboutUs.module.css';

class AboutUs extends Component {
  render() {
    const imgSrc = require('../../assets/img/Dragonfly.jpg');
    return (
      <Container className={classes.AboutUs}>
        <h2 className={classes.Header}>Our Story</h2>
        <Row>
          <Col className={classes.TextCol} md="8">
            <p>
              Youth Voices of Greater Cincinnati. YVOGC is a program in the
              community of Cincinnati with an empowering goal to show teenagers
              the value of their voices. Teens have the ability to host a talk
              show in which they can star in and interview community members
              for. The interview topics can range from a huge variety of topics
              such as work, bullying, LGBTQ, cancer survivors and deployment.
              Really, anything you are curious about or want to explore more.{' '}
            </p>
            <p>
              Youth Voices has a parallel program called Voices Without Borders.
              It is a similar program but offered to those who wish to do a talk
              show in another language. The talk show program started in 2018 by
              Leila Kubesch, a Foreign Language teacher at Norwood Middle
              School. Mrs. Kubesch went to great measures to make the program
              for her students possible.
            </p>
            <p>
              We are inviting youth wishing to be a hosts, or adults wanting to
              serve as a guest on our talk shows. Hosts can range from grades
              8-12. Talk shows typically occur on weekdays beginning at 3:00
              after school. The shows have no time limit as they can last from
              15 to 90 minutes. For more information please email us at
              youthvoicesofgreatercincinnati@gmail.com
            </p>
          </Col>
          <Col className={classes.ImageCol} md="4">
            <img src={imgSrc} alt="about" />
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    members: state.members
  };
};

export default connect(mapStateToProps)(AboutUs);
