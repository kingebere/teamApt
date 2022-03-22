import React, {useState, useEffect} from "react";
import "./WeekBox.css";
import item from "./data";
export default function WeekBox() {
  const [dates, setDates] = useState([]);

  //Get the current data , if it equals to a number in the data , the algorithm selects the first 9 and last 9 numbers and stores them in the dates state
  useEffect(() => {
    item.forEach(cde => {
      if (new Date().getDate() === cde.number) {
        setDates(item.slice(cde.id - 1 - 9, cde.id + 7));
      }
    });
  }, []);

  return (
    <>
      <div className="WeekBox">
        <div className="WeekBox__left">
          {dates.map(set => {
            return (
              <ul
                className={`WeekBox__left-1 ${
                  new Date().getDate() === set.number && "active-button"
                }`}
                key={set.id}
                title="dates"
              >
                <li>{set.day}</li>
                <li>{set.number}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
}
