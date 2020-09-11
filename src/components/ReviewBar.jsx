import React from "react";

const ReviewBar = ({ main }) => (
  <div>
    {main.metascore ? (
      <span>
        <span class="score-box">
          <span class="score-value">{main.metascore}</span>
        </span>

        <a href="">Metascore</a>
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
