import React from "react";
import Youtube from "react-youtube";

const TrailerView = ({ main }) => (
  <span class="trailer-block">
    <span class="poster">
      <img src={main.imageurl} alt={`Poster for the film ${main.title}`} />
    </span>
    <span class="trailer">
      <Youtube videoId="IVZ0B4iDS8w" opts={{ height: "268", width: "470" }} />
    </span>
  </span>
);

export default TrailerView;
