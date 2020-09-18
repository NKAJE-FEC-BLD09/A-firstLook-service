import React from "react";

const ReviewBar = ({ main }) => (
  <div>
    {main.metascore ? (
      <span>
        <span class="score-box">
          <span class="score-value">{main.metascore}</span>
        </span>
        <span>
          <a href="" style={{ verticalAlign: "top" }}>
            Metascore
          </a>
          <div>
            From <a href="metacritic.com">metacritic.com</a>
          </div>
        </span>
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
