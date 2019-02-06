import React, { Component } from 'react';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import Program from '../../components/HomeProgram/HomeProgram';
import NewsNode from '../../components/NewsNode/NewsNode';
import VideoNode from '../../components/VideoNode/VideoNode';
import AppCarousel from '../AppCarousel/AppCarousel';
import classes from './Home.module.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      programs: [
        {
          img: require('../../assets/img/YouthVoicesLogo.jpg'),
          alt: 'Youth Voices',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque egestas, turpis a feugiat dictum, augue maurisiaculis felis, eget ultrices magna nibh ut lectus.'
        },
        {
          img: require('../../assets/img/VoicesWithoutBorders.png'),
          alt: 'Youth Voices',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque egestas, turpis a feugiat dictum, augue maurisiaculis felis, eget ultrices magna nibh ut lectus.'
        }
      ],
      news: [
        {
          img: require('../../assets/img/Aboutteamsnip.png'),
          alt: 'img',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
        },
        {
          img: require('../../assets/img/Aboutteamsnip.png'),
          alt: 'img',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
        },
        {
          img: require('../../assets/img/Aboutteamsnip.png'),
          alt: 'img',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
        }
      ],
      videos: [
        {
          title: 'Video Title',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA'
        }
      ],
      supporters: [
        {
          img: require('../../assets/img/Aboutteamsnip.png'),
          alt: 'img'
        },
        {
          img: require('../../assets/img/Aboutteamsnip.png'),
          alt: 'img'
        },
        {
          img: require('../../assets/img/Aboutteamsnip.png'),
          alt: 'img'
        },
        {
          img: require('../../assets/img/Aboutteamsnip.png'),
          alt: 'img'
        }
      ]
    };
  }

  render() {
    const { programs, news, videos, supporters } = this.state;
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
