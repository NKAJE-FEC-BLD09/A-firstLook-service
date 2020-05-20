import React from "react";
import RatingModal from "./RatingModal.jsx";

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  render() {
    return (
      <span>
        <span class="solid-star"></span>
        <span class="rating-box">
          <span class="star-rating">
            {this.props.main.avgreview
              ? this.props.main.avgreview.slice(0, 3)
              : null}
          </span>
          <span class="denominator">/10</span>
          <div class="num-reviews quicklink">{this.props.main.numreviews}</div>
        </span>

        <span>
          <RatingModal showModal={this.state.showModal} />
        </span>
      </span>
    );
  }
}

export default StarRating;
