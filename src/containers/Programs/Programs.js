import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import Program from '../../components/Program/Program';
import classes from './Programs.module.css';
class Programs extends Component {
  render() {
    const { programs } = this.props;
    const renderPrograms = programs.map((program, index) => {
      return (
        <Program
          key={index}
          src={program.src}
          title={program.title}
          alt={program.alt}
          text={program.text}
        />
      );
    });
    return (
      <div className={classes.Programs}>
        <Container className={classes.Container}>
          <h2 className={classes.Header}>About Our Programs</h2>
          <Row className={classes.Row}>{renderPrograms}</Row>
          <Col>
            <p>
              We offer two televised talk show programs to youth to have a voice
              about issues that impact them. We are inviting youth wishing to
              host, or adults willing to serve as a guest on our talk shows.
            </p>
          </Col>
          <Col>
            <p>
              Youth hosts can range from grades 8-12. Talk shows typically occur
              on weekdays beginning at 3:00 after school. The shows have no time
              limit as they can last from 15 to 90 minutes. We have no dress
              requirement because we want to be inclusive and we wish to avoid
              creating obstacles for those who may not have dressy outfits. We
              ask that the shirts are respectful/ Whatever is appropriate in
              schools is permissible for the show. Prepare your questions in
              advance, share your questions so we may offer you guidance in the
              order. Make a Thank You card for your guest or we can provide the
              art supplies.
            </p>
          </Col>
          <Col>
            <p>
              For more information please email us at
              youthvoicesofgreatercincinnati@gmail.com
            </p>
          </Col>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    programs: state.programs
  };
};
export default connect(mapStateToProps)(Programs);
