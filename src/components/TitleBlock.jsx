import React from "react";

const TitleBlock = ({ main, categories }) => (
  <span>
    <span className="Ribbon">+</span>
    <span className="titleInfo">
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
      <span className="subtext">
        {main.rated} | {main.duration} |{" "}
        {categories.map((category) => {
          if (
            category.category === categories[categories.length - 1].category
          ) {
            return category.category;
          } else {
            return category.category + ", ";
          }
        })}{" "}
        | {main.releasedate}
      </span>
    </span>
    <span>
      * {main.avgreview} {main.numreviews}
    </span>
  </span>
);

export default TitleBlock;
