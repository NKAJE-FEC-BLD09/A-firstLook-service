import React from "react";
import WatchOptions from "./WatchOptions.jsx";
import ReviewBar from "./ReviewBar.jsx";

const MoreInfo = ({ main, directors, writers, stars }) => (
  <div class="more-info">
    <p>{main.description}</p>
    <br />

    {directors.length === 1 ? (
      <div>
        <span class="bold">Director:&nbsp;</span>
        <a href="">{directors[0].director}</a>
      </div>
    ) : (
      <div>
        <span class="bold">Directors:&nbsp;</span>
        {directors.map((director) => (
          <span>
            <a href="">{director.director}</a>
            <span>
              {director.director === directors[directors.length - 1].director
                ? null
                : ", "}
            </span>
          </span>
        ))}
      </div>
    )}

    {writers.length === 1 ? (
      <div>
        <span class="bold">Writer:&nbsp;</span>
        <a href="">{writers[0].writer}</a>
      </div>
    ) : (
      <div>
        <span class="bold">Writers:&nbsp;</span>
        {writers.map((writer) => (
          <span>
            <a href="">{writer.writer}</a>
            <span>
              {writer.category ? ` (${writer.category})` : null}
              {writer.writer === writers[writers.length - 1].writer
                ? null
                : ", "}
            </span>
          </span>
        ))}
      </div>
    )}

    <div>
      {stars.length === 1 ? (
        <span>
          <span class="bold">Star:&nbsp;</span>
          <a href="">{stars[0].star}</a>
        </span>
      ) : (
        <span>
          <span class="bold">Stars:&nbsp;</span>
          {stars.map((star) => (
            <span>
              <a href="">{star.star}</a>
              <span>
                {star.star === stars[stars.length - 1].star ? null : ", "}
              </span>
            </span>
          ))}
        </span>
      )}
      <span class="division">|</span>
      <a class="quicklink" href="">
        See full cast & crew
      </a>
    </div>

    <WatchOptions />
    <ReviewBar main={main} />
  </div>
);

export default MoreInfo;
