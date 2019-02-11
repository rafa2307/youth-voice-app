import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import AppForm from '../AppForm/AppForm';
import FormCard from '../../components/FormCard/FormCard';

import classes from './ContactUs.module.css';

export default class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      card: {
        email: 'Aliquip et incididunt et nostrud.',
        address:
          'Eu mollit pariatur aliquip amet mollit eiusmod qui. Ipsum eamagna occaecat culpa ullamco pariatur ut. Non commodo minim irure consequat. Consectetur deserunt enim qui esse. Mollitqui ut incididunt velit incididunt.'
      }
    };
  }
  render() {
    const { card } = this.state;
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
              <FormCard email={card.email} address={card.address} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
