import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'reactstrap';
import classes from './Participate.module.css';

import AppForm from '../../AppForm/AppForm';

class Participate extends Component {
  render() {
    const { formProps } = this.props;
    return (
      <div className={classes.Participate}>
        <div className={classes.AdultDiv}>
          <h2 className={classes.Header}>Adult Talk Show Application</h2>
        </div>

        <div className={classes.divBanner}>
          We appreciate your interest in being part of a talk show! Please fill
          out form.
        </div>
        <Col md="6">
          <AppForm formProps={formProps} />
        </Col>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    formProps: state.adultFormProps
  };
};
export default connect(mapStateToProps)(Participate);
