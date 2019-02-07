import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchField from 'react-search-field';
import classes from './Stories.module.css';

import StoryHeader from '../../components/StoryHeader/StoryHeader';
import Story from '../../components/Story/Story';
export default class Stories extends Component {
  constructor() {
    super();
    this.state = {
      stories: [
        {
          header: 'Story 1',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 2',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 3',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 4',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 5',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 6',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 7',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 8',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 9',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 10',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 11',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 12',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 13',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 14',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 15',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 16',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 17',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 18',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 19',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 20',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 21',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 22',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 23',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 24',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 25',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 26',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        }
      ]
    };
  }
  render() {
    const { stories } = this.state;
    const renderStories = stories.map((story, index) => {
      return (
        <Col key={index} md="4">
          <Story header={story.header} src={story.src} text={story.text} />
        </Col>
      );
    });
    return (
      <div className={classes.Stories}>
        <Container className={classes.StoriesContainer}>
          <Col className={classes.HeaderCol}>
            <StoryHeader />
          </Col>
          <Col className={classes.StorySearch}>
            <SearchField placeholder="Search Story" />
          </Col>
          <Row className={classes.StorySection}>{renderStories}</Row>
        </Container>
      </div>
    );
  }
}
