import React from "react";

import "./Content.css";
export default function Content({data}) {
  return (
    <div className="Content">
      {data &&
        data.map(set => {
          return (
            <div className="Content__wrapper" key={set.id}>
              <div className="Content__left">
                <img className="Content__image" src={set.img} alt="okm" />

                <div className="Content__textWrapper">
                  <h1>{set.name}</h1>
                  <h2>{set.job}</h2>
                </div>

                <div className="dots"></div>
              </div>

              <div>
                <div
                  style={{
                    width: `${set.width}px`,
                    margin: `0 0 0 ${set.marginLeft}px`,
                    background: set.color,
                  }}
                  className="Content__progress"
                >
                  <div
                    className={`Content__progress-absolute ${
                      set.minWidth === 100 && "white"
                    }`}
                    style={{color: set.minColor}}
                  >
                    {" "}
                    {set.minWidth}%
                  </div>

                  <div
                    className={`Content__progress-content ${
                      set.id && `active-btn-${set.id}`
                    }`}
                    style={{
                      width: `${set.minWidth}%`,
                      background: set.minColor,
                    }}
                  >
                    <div className="dotted" style={{background: set.dot}}></div>
                    <div className="Content__task__text">{set.task}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
