import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import AppForm from '../AppForm/AppForm';

import classes from './ContactUs.module.css';

export default class ContactUs extends Component {
  render() {
    return (
      <div className={classes.ContactUs}>
        <Container>
          <Row>
            <Col>
              <h2>Contact Us</h2>
              <p>
                Consectetur nulla irure nulla aliquip ipsum irure consectetur
                dolor laborum excepteur aute enim culpa. Sunt id anim id
                consequat sunt id. Et eu sint quis ipsum dolor eiusmod occaecat
                velit nostrud. Irure occaecat incididunt eiusmod elit fugiat qui
                nostrud cupidatat enim adipisicing esse dolore in id. Nisi eu
                qui anim sunt voluptate quis consectetur laboris.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <h3>Email Us</h3>
              <AppForm />
            </Col>
            <Col md="6">
              <div className={classes.FormCard}>
                <span className={classes.CardTitle}>Email:</span>{' '}
                <span>Aliquip et incididunt et nostrud.</span>
                <br />
                <span className={classes.CardTitle}>Address:</span>{' '}
                <span>
                  Eu mollit pariatur aliquip amet mollit eiusmod qui. Ipsum ea
                  magna occaecat culpa ullamco pariatur ut. Non commodo minim
                  irure consequat. Consectetur deserunt enim qui esse. Mollit
                  qui ut incididunt velit incididunt.
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
