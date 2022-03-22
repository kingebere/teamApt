import React from "react";
import "./DateBox.css";
export default function DateBox() {
  return (
    <>
      <div className="DateBox">
        <div className="DateBox__left">
          <h2>February 2021</h2>
          <span className="material-icons">keyboard_arrow_left</span>
          <span className="material-icons">keyboard_arrow_right</span>
        </div>

        <div className="DateBox__right">
          <span className="material-icons">search</span>
          <select className="DateBox__select">
            <option>Month</option>
          </select>
        </div>
      </div>
    </>
  );
}
