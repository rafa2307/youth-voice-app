import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

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
              <Form>
                <FormGroup>
                  <Label for="name">Your Name (required)</Label>
                  <Input type="text" name="name" id="name" />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email Address (required)</Label>
                  <Input type="email" name="email" id="email" />
                </FormGroup>
                <FormGroup>
                  <Label for="subject">Subject (required)</Label>
                  <Input type="text" name="subject" id="subject" />
                </FormGroup>
                <FormGroup>
                  <Label for="message">Message (required)</Label>
                  <Input type="textarea" name="message" id="message" />
                </FormGroup>
                <Button className={classes.FormButton}>Submit</Button>
              </Form>
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
