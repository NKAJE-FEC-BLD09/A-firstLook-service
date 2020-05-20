import React from "react";

const StarRating = ({ main }) => (
  <span>
    <span class="solid-star"></span>
    <span class="rating-box">
      <span class="star-rating">
        {main.avgreview ? main.avgreview.slice(0, 3) : null}
      </span>
      <span class="denominator">/10</span>
      <div class="num-reviews quicklink">{main.numreviews}</div>
    </span>
  </span>
);

export default StarRating;
