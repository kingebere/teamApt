/* eslint-disable react/display-name */
import React, {useState} from "react";
import "./SideBar.css";
import humans from "../../assets/images/list-img-02.png";
import item from "./data";

// eslint-disable-next-line react/display-name
// eslint-disable-next-line no-empty-pattern
const SideBar = React.forwardRef(({}, sideBarRef) => {
  const [names, setNames] = useState("PJ");

  //State for changing the header
  function click(name, e) {
    e.preventDefault();
    setNames(name);
  }
  return (
    <div className="SideBar" ref={sideBarRef}>
      <div className="SideBar__firstHalf">
        <div className="SideBar__header">
          <div className="SideBar__header-left">
            <div className="SideBar__header__circle"></div>
            <h1>{names}</h1>
          </div>
          <div className="SideBar__header__icon">
            <span className="material-icons">keyboard_arrow_left</span>
          </div>
        </div>

        <div className="SideBar__items">
          {item &&
            item.map(set => {
              return (
                <a href="/" key={set.id}>
                  {" "}
                  <button
                    className="SideBar__item"
                    onClick={e => click(set.name, e)}
                  >
                    <span className="material-icons-outlined">
                      {set.iconName}
                    </span>

                    <h1>{set.name}</h1>
                  </button>{" "}
                </a>
              );
            })}
        </div>
        <div>
          <div className="SideBar__task">
            <h1 className="SideBar__task__text">Create new task</h1>
            <div className="SideBar__task__circle">
              <span className="SideBar__task__symbol">&#10011;</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="SideBar__left">
          <img className="SideBar__left__image" src={humans} alt="human" />

          <div className="SideBar__left__textWrapper">
            <h1>Finna A.</h1>
            <h2>gudoski30@gmail.com</h2>
          </div>

          <span className="material-icons">keyboard_arrow_up</span>
        </div>
      </div>
    </div>
  );
});
export default SideBar;
