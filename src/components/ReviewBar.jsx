import React from "react";

const ReviewBar = ({ main }) => (
  <div>
    {main.metascore ? (
      <span>
        <span>{main.metascore}</span>
        <span>Metascore</span>
      </span>
    ) : null}

    <span>
      <span>Reviews</span>
      <div>
        {main.numuserreviews}|{main.numcriticreviews}
      </div>
    </span>

    {main.popularity ? (
      <span>
        <span>Metascore</span>
        <span>
          {main.popularity}
          {main.popularitychange}
        </span>
      </span>
    ) : null}
  </div>
);

export default ReviewBar;
