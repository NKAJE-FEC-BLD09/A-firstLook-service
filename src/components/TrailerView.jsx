import React from "react";

const TrailerView = ({ main }) => (
  <div>
    <span>
      <img src={main.imageurl} alt={`Poster for the film ${main.title}`} />
    </span>
    <span>Placeholder for video trailer</span>
  </div>
);

export default TrailerView;
