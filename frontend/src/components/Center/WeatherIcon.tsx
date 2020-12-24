import React from "react";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import styles from "../../styles/Center/Banner.module.css";

// TODO: Create object where key corresponds to weather report from VWS
// and value corresponds to fitting weather icon component from Material UI
// Add fitting color to the icon too. This can be a prop in the object
const WeatherIcon = () => {
  return (
    <div className={`${styles.weatherContainer} m-2`}>
      <img
        src="./icons/sun.png"
        alt="Weather Icon"
        className={`${styles.icon}`}
      />
    </div>
  );
};

export default WeatherIcon;
