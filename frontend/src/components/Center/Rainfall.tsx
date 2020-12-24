import React from "react";
import styles from "../../styles/Center/Banner.module.css";

const Rainfall = () => {
  return (
    <div className={`${styles.rainfallContainer} m-2`}>
      <img src="./icons/rain.png" alt="RainfallIcon" className={`${styles.icon}`} />
    </div>
  );
};

export default Rainfall;
