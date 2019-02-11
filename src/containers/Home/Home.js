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
    const renderPrograms = programs.map((program, index) => {
      return (
        <Program
          key={index}
          ProgramImage={program.img}
          ImageAlt={program.alt}
          P={program.text}
        />
      );
    });
    const renderNews = news.map((ele, index) => {
      return (
        <NewsNode key={index} img={ele.img} alt={ele.alt} text={ele.text} />
      );
    });
    const renderVideos = videos.map((video, index) => {
      return <VideoNode key={index} src={video.src} title={video.title} />;
    });
    const renderSupporters = supporters.map((supporter, index) => {
      return (
        <Col key={index} md="3">
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
          <Row className={classes.ProgramSection}>{renderPrograms}</Row>
        </Container>
        <Container className={classes.BlueContainer}>
          <Row className={classes.VideoSection}>
            <Col md="6">
              <h4>News</h4>
              {renderNews}
            </Col>
            <Col md="6">
              <h4>Videos</h4>
              {renderVideos}
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
          <Row>{renderSupporters}</Row>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    programs: state.homePrograms,
    news: state.news,
    videos: state.homeVideos,
    supporters: state.supporters
  };
};
export default connect(mapStateToProps)(Home);
