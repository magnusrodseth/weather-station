import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import styles from "../../styles/Center/Banner.module.css";

// TODO: Create object where key corresponds to weather report from VWS
// and value corresponds to fitting weather icon component from Material UI
// Add fitting color to the icon too. This can be a prop in the object
const CurrentWeather = () => {
  return (
    <div className={`${styles.weatherContainer} m-2`}>
      <Typography variant="subtitle1" className={`mr-2`}>
        Været nå
      </Typography>
      <img
        src="./icons/sun.png"
        alt="Weather Icon"
        className={`${styles.currentWeatherIcon}`}
      />
    </div>
  );
};

export default CurrentWeather;
