import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import AppForm from '../AppForm/AppForm';
import FormCard from '../../components/FormCard/FormCard';

import classes from './ContactUs.module.css';

class ContactUs extends Component {
  render() {
    const { card, formProps } = this.props;
    return (
      <div className={classes.ContactUs}>
        <Container>
          <h2>Contact Us</h2>
          <Row>
            <Col md="6">
              <h3>Email Us</h3>
              <AppForm formProps={formProps} />
            </Col>
            <Col md="6">
              <FormCard
                email={card.email}
                address={card.address}
                parking={card.parking}
                arrival={card.arrivalTime}
                directions={card.directions}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    card: state.card,
    formProps: state.contactFormProps
  };
};
export default connect(mapStateToProps)(ContactUs);
