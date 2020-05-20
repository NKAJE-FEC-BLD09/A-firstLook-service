import React from "react";
import StarRating from "./StarRating.jsx";

const TitleBlock = ({ main, categories }) => (
  <span>
    <span class="ribbon"></span>
    <span class="title-info">
      <h1>
        {main.title}{" "}
        {main.releasedate ? (
          <span>
            (
            {
              <a class="quicklink" href="">
                {main.releasedate.split(" ")[2]}
              </a>
            }
            )
          </span>
        ) : null}
      </h1>
      <span class="subtext">{main.rated}</span>
      <span class="division">|</span>
      <span class="subtext">{main.duration}</span>
      <span class="division">|</span>
      <span>
        {categories.map((category) => {
          if (
            category.category === categories[categories.length - 1].category
          ) {
            return (
              <a class="quicklink" href="">
                {category.category}
              </a>
            );
          } else {
            return (
              <span>
                <a class="quicklink" href="">
                  {category.category}
                </a>
                ,&nbsp;
              </span>
            );
          }
        })}
      </span>
      <span class="division">|</span>
      <span class="quicklink">{main.releasedate}</span>
    </span>
    <span class="star-box">
      <StarRating main={main} />
    </span>
  </span>
);

export default TitleBlock;
