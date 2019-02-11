import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import SearchField from 'react-search-field';
import classes from './Stories.module.css';

import StoryHeader from '../../components/StoryHeader/StoryHeader';
import Story from '../../components/Story/Story';
class Stories extends Component {
  constructor() {
    //set state only call from api once, notice how rendered stories is empty
    super();
    this.state = {
      currentPage: 1,
      storiesPerPage: 9,
      renderedStories: []
    };
    this.handleClick = this.handleClick.bind(this);

    this.onChange = this.onChange.bind(this);
  }

  //fill rendered stories with data from youtube
  componentWillMount() {
    const { stories } = this.props;
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
    const { stories } = this.props;
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
const mapStateToProps = state => {
  return {
    stories: state.stories
  };
};
export default connect(mapStateToProps)(Stories);
