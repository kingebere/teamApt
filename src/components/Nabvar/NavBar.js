import React from "react";
import "./NavBar.css";
export default function NavBar({toggleLinks}) {
  return (
    <>
      <div className="NavBar">
        <div className="NavBar__left">
          <button className="NavBar__header__icon" onClick={toggleLinks}>
            <span className="material-icons">keyboard_arrow_left</span>
          </button>
          <div className="NavBar__left-1">
            <h1>Projects</h1>
            <span className="material-icons">keyboard_arrow_right</span>
            <span>GSE Banking App</span>
          </div>
        </div>
        <div className="NavBar__right">
          <div>
            <span className="material-icons-outlined">message</span>
            <span className="material-icons-outlined">alarm</span>
          </div>
          <div className="NavBar__right--1"></div>
          <div className="NavBar__right--2">
            <div className="NavBar__circle"></div>
            <div>RonoutIT</div>
            <span className="material-icons">keyboard_arrow_down</span>
          </div>
        </div>
      </div>
    </>
  );
}
