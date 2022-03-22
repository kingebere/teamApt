import React from "react";
import "./Main.css";
import Content from "../../components/Content/Content";
import DateBox from "../../components/DateBox/DateBox";
import MiniBar from "../../components/MiniBar/MiniBar";
import NavBar from "../../components/Nabvar/NavBar";
import WeekBox from "../../components/WeekBox/WeekBox";

// eslint-disable-next-line react/display-name
const Main = React.forwardRef(({data, percentage, toggleLinks}, MainRef) => {
  return (
    <div className="Main" ref={MainRef}>
      <div className="Main__container">
        <NavBar toggleLinks={toggleLinks} />
        <MiniBar percentage={percentage} />
        <DateBox />
        <WeekBox />
        <Content data={data} />
      </div>
    </div>
  );
});
export default Main;
