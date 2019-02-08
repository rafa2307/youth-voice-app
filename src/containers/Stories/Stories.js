import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SearchField from 'react-search-field';
import classes from './Stories.module.css';

import StoryHeader from '../../components/StoryHeader/StoryHeader';
import Story from '../../components/Story/Story';
export default class Stories extends Component {
  constructor() {
    //set state only call from api once, notice how rendered stories is empty
    super();
    this.state = {
      currentPage: 1,
      storiesPerPage: 9,
      stories: [
        {
          header: 'Story 1',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 2',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'bob 3',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 4',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 5',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 6',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 7',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit bob, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 8',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 9',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 10',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
        },
        {
          header: 'Story 11',
          src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
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
            'Lorem ipsum dolor sit amet, bob adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
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
            'Lorem ipsum dolor sit amet, story adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
        }
      ],
      renderedStories: []
    };
    this.handleClick = this.handleClick.bind(this);

    this.onChange = this.onChange.bind(this);
  }

  //fill rendered stories with data from youtube
  componentWillMount() {
    const { stories } = this.state;
    this.setState({
      renderedStories: stories.slice()
    });
  }
  //for handling current page switching in pagination
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  //function for searching stories
  onChange(value) {
    const { stories } = this.state;
    const replacementStories = [];
    for (let i = 0; i < stories.length; i++) {
      if (
        stories[i].header.toLowerCase().includes(value.toLowerCase()) ||
        stories[i].text.toLowerCase().includes(value.toLowerCase())
      ) {
        replacementStories.push(stories[i]);
      }
    }
    this.setState({
      renderedStories: replacementStories.slice(),
      currentPage: 1
    });
  }

  render() {
    //work out details of pagination
    const { renderedStories, currentPage, storiesPerPage } = this.state;
    const indexOfLastStory = currentPage * storiesPerPage;
    const indexOfFirstStory = indexOfLastStory - storiesPerPage;
    const currentStories = renderedStories.slice(
      indexOfFirstStory,
      indexOfLastStory
    );
    //render stories and page numbers
    const showStories = currentStories.map((story, index) => {
      return (
        <Col key={index} md="4">
          <Story header={story.header} src={story.src} text={story.text} />
        </Col>
      );
    });

    const pageNumbers = [];
    for (
      let i = 1;
      i <= Math.ceil(renderedStories.length / storiesPerPage);
      i++
    ) {
      pageNumbers.push(i);
    }
    let renderPageNumbers = [];
    // display page dots if pages are higher than one
    if (pageNumbers.length > 1) {
      renderPageNumbers = pageNumbers.map(number => {
        const isActive =
          number === this.state.currentPage
            ? classes.PageNumberActive
            : classes.PageNumberNotActive;
        return (
          <li
            key={number}
            id={number}
            className={isActive}
            onClick={this.handleClick}
          >
            &bull;
          </li>
        );
      });
    }

    return (
      <div className={classes.Stories}>
        <Container className={classes.StoriesContainer}>
          <Col className={classes.HeaderCol}>
            <StoryHeader />
          </Col>
          <Col className={classes.StorySearch}>
            <SearchField
              placeholder="Search Stories"
              onChange={this.onChange}
            />
          </Col>
          <Row className={classes.StorySection}>
            {showStories}
            <div className={classes.Pages}>{renderPageNumbers}</div>
          </Row>
        </Container>
      </div>
    );
  }
}
