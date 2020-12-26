import { Typography } from "@material-ui/core";
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
      <Typography variant="subtitle1" className={`ml-2`}>
        {temperature} <sup>o</sup>C
      </Typography>
    </div>
  );
};

export default Temperature;
