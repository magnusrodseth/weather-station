import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import styles from "../../styles/Center/Banner.module.css";

const Rainfall = () => {
  // TODO: Fetch this value from Redux or backend
  const rainfall = 8;
  return (
    <div className={`${styles.rainfallContainer} m-2`}>
      <img
        src="./icons/rain.png"
        alt="RainfallIcon"
        className={`${styles.icon}`}
      />
      <Typography variant="subtitle1" className={`ml-2`}>
        {rainfall} mm
      </Typography>
    </div>
  );
};

export default Rainfall;
