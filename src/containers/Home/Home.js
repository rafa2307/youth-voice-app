import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
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
          img: require('../../assets/img/images.png'),
          alt: 'img',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
        },
        {
          img: require('../../assets/img/images.png'),
          alt: 'img',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
        },
        {
          img: require('../../assets/img/images.png'),
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
      ]
    };
  }

  render() {
    const { programs, news, videos } = this.state;
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

    return (
      <div className={classes.Home}>
        <AppCarousel />
        <Container>
          <Col>
            <h1>OUR PROGRAMS</h1>
          </Col>
          <Row>{renderPrograms}</Row>
          <Row>
            <Col md="6">
              <h4>News</h4>
              {renderNews}
            </Col>
            <Col md="6">
              <h4>Videos</h4>
              {renderVideos}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
