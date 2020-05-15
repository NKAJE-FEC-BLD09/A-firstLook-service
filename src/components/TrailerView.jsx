import React from "react";

const TrailerView = ({ main }) => (
  <div>
    <span>
      <img src={main.imageurl} alt={`Poster for the film ${main.title}`} />
    </span>
    <span>
      <div
        class="youtube"
        id="IVZ0B4iDS8w"
        // style={{width: 560px, height: 315px}}
      ></div>
    </span>
  </div>
);

export default TrailerView;
