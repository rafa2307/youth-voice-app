import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import Program from '../../components/HomeProgram/HomeProgram';
import NewsNode from '../../components/NewsNode/NewsNode';
import VideoNode from '../../components/VideoNode/VideoNode';
import AppCarousel from '../AppCarousel/AppCarousel';
import classes from './Home.module.css';

class Home extends Component {
  render() {
    const { programs, news, videos, supporters } = this.props;
    // render all component lists from state arrays
    const renderPrograms = () => {
      return (
        <>
          <Program
            className={classes.HomeProgram}
            key={0}
            ProgramImage={programs[0].src}
            ImageAlt={programs[0].alt}
            P={programs[0].text}
          />
          <Program
            className={classes.HomeProgram}
            key={1}
            ProgramImage={programs[1].src}
            ImageAlt={programs[1].alt}
            P={programs[1].text}
          />
        </>
      );
    };
    const renderNews = news.map((ele, index) => {
      return (
        <NewsNode key={index} img={ele.img} alt={ele.alt} text={ele.text} />
      );
    });
    const renderVideos = () => {
      return <VideoNode key={1} src={videos[0].src} title={videos[0].header} />;
    };
    const renderSupporters = supporters.map((supporter, index) => {
      return (
        <Col key={index} md="4">
          <img
            className={classes.Supporter}
            src={supporter.img}
            alt={supporter.alt}
          />
        </Col>
      );
    });

    return (
      <div className={classes.Home}>
        <AppCarousel />
        <Container>
          <Col>
            <h1>OUR PROGRAMS</h1>
          </Col>
          <Row className={classes.ProgramSection}>{renderPrograms()}</Row>
        </Container>
        <Container className={classes.BlueContainer}>
          <Row className={classes.VideoSection}>
            <Col md="6">
              <h4>News</h4>
              {renderNews}
            </Col>
            <Col md="6">
              <h4>Videos</h4>
              {renderVideos()}
            </Col>
            <NavLink
              className={classes.AllPosts}
              tag={RRNavLink}
              to="stories"
              activeClassName="active"
            >
              All Posts
            </NavLink>
          </Row>
        </Container>
        <Container className={classes.BottomContainer}>
          <h2>OUR SUPPORTERS AND PARTNERS</h2>
          <Row className={classes.Row}>{renderSupporters}</Row>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    programs: state.programs,
    news: state.news,
    videos: state.stories,
    supporters: state.supporters
  };
};
export default connect(mapStateToProps)(Home);
