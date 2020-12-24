import React from "react";
import styles from "../../styles/Center/Banner.module.css";

// temp + eff.temp
const Temperature = () => {
  // TODO: Fetch this value from Redux or backend
  const temperature = 20;
  return (
    <div className={`${styles.temperatureContainer} m-2`}>
      <img
        src="./icons/thermometer.png"
        alt="Thermometer Icon"
        className={`${styles.icon}`}
      />
      {temperature} <sup>o</sup>C
    </div>
  );
};

export default Temperature;
