import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import classes from './AppForm.module.css';

export default class AppForm extends Component {
  render() {
    return (
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
    );
  }
}
