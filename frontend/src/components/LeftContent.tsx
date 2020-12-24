import React from "react";
import styles from "../styles/Index.module.css";
import Compass from "./Compass";

const LeftContent = () => {
  return (
    <div className={`${styles.leftContainer}`}>
      <h1>Left content goes here...</h1>
      <Compass
        degree={270}
        directions={["N", "NE", "E", "SE", "S", "SW", "W", "NW"]}
      />
    </div>
  );
};

export default LeftContent;
