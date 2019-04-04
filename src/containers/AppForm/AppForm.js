import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import classes from './AppForm.module.css';

export default class AppForm extends Component {
  formProps = [
    {
      type: 'name',
      title: 'Your Name (required)',
      inputType: 'text'
    },
    {
      type: 'email',
      title: 'Email Address (required)',
      inputType: 'email'
    },
    {
      type: 'subject',
      title: 'Subject (required)',
      inputType: 'text'
    },
    {
      type: 'message',
      title: 'Message (required)',
      inputType: 'textarea'
    }
  ];
  render() {
    const formGroups = this.formProps.map((formGroup, index) => {
      return (
        <FormGroup key={index}>
          <Label for={formGroup.type}>{formGroup.title}</Label>
          <Input
            type={formGroup.inputType}
            name={formGroup.type}
            id={formGroup.type}
          />
        </FormGroup>
      );
    });

    return (
      <Form>
        {formGroups}
        <Button className={classes.FormButton}>Submit</Button>
      </Form>
    );
  }
}
