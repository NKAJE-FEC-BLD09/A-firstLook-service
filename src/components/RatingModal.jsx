import React from "react";

class RatingModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: 0,
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(e) {
    console.log(e);
  }

  render() {
    if (this.props.showModal === false) {
      return null;
    } else {
      return (
        <div>
          <div
            class="rating-star star-1"
            onMouseEnter={this.handleHover("1")}
          ></div>
          <div
            class="rating-star star-2"
            onMouseEnter={this.handleHover("2")}
          ></div>
          <div
            class="rating-star star-3"
            onMouseEnter={this.handleHover("3")}
          ></div>
          <div
            class="rating-star star-4"
            onMouseEnter={this.handleHover("4")}
          ></div>
          <div
            class="rating-star star-5"
            onMouseEnter={this.handleHover("5")}
          ></div>
          <div
            class="rating-star star-6"
            onMouseEnter={this.handleHover("6")}
          ></div>
          <div
            class="rating-star star-7"
            onMouseEnter={this.handleHover("7")}
          ></div>
          <div
            class="rating-star star-8"
            onMouseEnter={this.handleHover("8")}
          ></div>
          <div
            class="rating-star star-9"
            onMouseEnter={this.handleHover("9")}
          ></div>
          <div
            class="rating-star star-10"
            onMouseEnter={this.handleHover("10")}
          ></div>
        </div>
      );
    }
  }
}

export default RatingModal;
