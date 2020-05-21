import React from "react";

class RatingModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: 0,
    };
    // this.handleHover = this.handleHover.bind(this);
  }

  handleHover(e) {
    // console.log(e);
    for (let i = 1; i <= Number(e); i++) {
      document.getElementById(`star-${i}`).classList.add("rating-star-hover");
    }
    for (let j = Number(e) + 1; j <= 10; j++) {
      console.log(document.getElementById(`star-${j}`).classList);
      if (
        document
          .getElementById(`star-${j}`)
          .classList.contains("rating-star-hover")
      ) {
        document
          .getElementById(`star-${j}`)
          .classList.remove("rating-star-hover");
      }
    }
  }

  render() {
    if (this.props.showModal === false) {
      return null;
    } else {
      return (
        <div>
          <div
            class="rating-star"
            id="star-1"
            onMouseEnter={this.handleHover.bind(this, "1")}
          ></div>
          <div
            class="rating-star"
            id="star-2"
            onMouseEnter={this.handleHover.bind(this, "2")}
          ></div>
          <div
            class="rating-star"
            id="star-3"
            onMouseEnter={this.handleHover.bind(this, "3")}
          ></div>
          <div
            class="rating-star"
            id="star-4"
            onMouseEnter={this.handleHover.bind(this, "4")}
          ></div>
          <div
            class="rating-star"
            id="star-5"
            onMouseEnter={this.handleHover.bind(this, "5")}
          ></div>
          <div
            class="rating-star"
            id="star-6"
            onMouseEnter={this.handleHover.bind(this, "6")}
          ></div>
          <div
            class="rating-star"
            id="star-7"
            onMouseEnter={this.handleHover.bind(this, "7")}
          ></div>
          <div
            class="rating-star"
            id="star-8"
            onMouseEnter={this.handleHover.bind(this, "8")}
          ></div>
          <div
            class="rating-star"
            id="star-9"
            onMouseEnter={this.handleHover.bind(this, "9")}
          ></div>
          <div
            class="rating-star"
            id="star-10"
            onMouseEnter={this.handleHover.bind(this, "10")}
          ></div>
        </div>
      );
    }
  }
}

export default RatingModal;
