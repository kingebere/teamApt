import React, {useState, useEffect, useRef} from "react";

import "./App.css";
import Main from "./containers/Main/Main";
import SideBar from "./containers/SideBar/SideBar";
import item from "./data";
import dataCompare from "./dataCompare";

function App() {
  //State for the updated items
  const [data, setData] = useState([]);

  //State for the percentage functionality
  const [percentage, setPercentage] = useState(0);

  //State for the comparison functionality
  const [compare] = useState(dataCompare);
  //State for toggling the sidebar
  const [showLinks, setShowLinks] = useState(false);

  const MainRef = useRef(null);
  const sideBarRef = useRef(null);

  //Function for toggling the sidebar
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  //Getting the properties and updating them
  useEffect(() => {
    if (showLinks) {
      MainRef.current.style.maxWidth = "100%";
      sideBarRef.current.style.display = "none";
      MainRef.current.style.flex = "0 0 100%";
    } else {
      MainRef.current.style.width = "80px";
      sideBarRef.current.style.display = "flex";
      MainRef.current.style.flex = "0 0 80%";
    }
  }, [showLinks]);

  //setting the data into the data state
  useEffect(() => {
    item.map(set =>
      setData(prev => {
        return [...prev, set];
      })
    );
  }, []);

  /**Increases the minWidth every 10 seconds and adds 12, once it is between 85 and 100, it converts the number to 100 and returns the array , if the array is identical to the comparestate , it ends the setInterval :) */
  useEffect(() => {
    let start = setInterval(() => {
      if (JSON.stringify(data) !== JSON.stringify(compare)) {
        const dataset = data.map(set => {
          if (set.minWidth > 85 || set.minWidth === 100) {
            set.minWidth = 100;
            return set;
          } else {
            set.minWidth += 12;
            return set;
          }
        });
        setData(dataset);
        const result = data
          .map(set => set.minWidth)
          .reduce((prev, curr) => Math.floor(prev + curr / 10), 0);
        setPercentage(result);
      }
    }, 10000);
    return () => clearInterval(start);
  }, [data, compare]);

  return (
    <div className="App">
      <SideBar ref={sideBarRef} />
      <Main
        data={data}
        percentage={percentage}
        ref={MainRef}
        toggleLinks={toggleLinks}
      />
    </div>
  );
}

export default App;
