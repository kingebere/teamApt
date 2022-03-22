import React from "react";
import "./MiniBar.css";
import modelOne from "../../assets/images/list-img-02.png";
import modelTwo from "../../assets/images/list-img-03.png";
import modelThree from "../../assets/images/list-img-04.png";

export default function MiniBar({percentage}) {
  return (
    <div className="MiniBar">
      <div className="MiniBar__left">
        <h1>GSE Banking app</h1>
        <div className="MiniBar__left-1">
          <h3>{percentage}%</h3>
          <div className="Minibar__length">
            <div
              className="Minibar__miniLength"
              style={{width: `${percentage}%`}}
            ></div>
          </div>
        </div>
      </div>
      <div className="MiniBar__right">
        <div className="MiniBar__button">
          <span>&#10011;</span>
          <span className="MiniBar__button__text">invite</span>
        </div>
        <div className="MiniBar__image-wrapper">
          <img
            src={modelOne}
            alt="human-image__one"
            className="MiniBar__image MiniBar__image-1"
          />
          <img
            src={modelTwo}
            alt="human-image__two"
            className="MiniBar__image MiniBar__image-2"
          />
          <img
            src={modelThree}
            alt="humanimage-three"
            className="MiniBar__image MiniBar__image-3"
          />

          <div className="MiniBar__image MiniBar__image-4">+15</div>
        </div>
      </div>
    </div>
  );
}
