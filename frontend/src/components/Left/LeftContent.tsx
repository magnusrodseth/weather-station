import React from "react";
import styles from "../../styles/Index.module.css";
import Compass from "./Compass";

const LeftContent = () => {
  return (
    <div className={`${styles.leftContainer}`}>
      <h1>Vindretning</h1>
      <Compass
        degree={287}
        directions={["N", "NE", "E", "SE", "S", "SW", "W", "NW"]}
      />
    </div>
  );
};

export default LeftContent;
