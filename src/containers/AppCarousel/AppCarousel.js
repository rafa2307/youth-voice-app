import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';

import classes from './AppCarousel.module.css';
//items for carousel

class AppCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  //reactstrap carousel functions
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    const { pictures } = this.props;
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === pictures.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    const { pictures } = this.props;
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? pictures.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { pictures } = this.props;
    const { activeIndex } = this.state;
    //render items for carousel display
    const slides = pictures.map((item, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <img src={item.src} alt={item.altText} />
        </CarouselItem>
      );
    });

    return (
      // Carousel display
      <Carousel
        className={classes.AppCarousel}
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          cssModule={classes}
          className={classes.CarouselIndicators}
          items={pictures}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}
const mapStateToProps = state => {
  return {
    pictures: state.pictures
  };
};
export default connect(mapStateToProps)(AppCarousel);
