import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
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
          {renderPrograms}
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
