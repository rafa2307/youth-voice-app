import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import classes from './AppForm.module.css';

export default class AppForm extends Component {
  render() {
    const formGroups = this.props.formProps.map((formGroup, index) => {
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
