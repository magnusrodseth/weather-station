import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import styles from "../../styles/Center/Banner.module.css";

const Wind = () => {
  const wind = 4;
  return (
    <div className={`${styles.windContainer} m-2`}>
      <img
        src="./icons/wind.png"
        alt="Wind Icon"
        className={`${styles.icon}`}
      />
      <Typography variant="subtitle1" className={`ml-2`}>
        {wind} m/s
      </Typography>
    </div>
  );
};

export default Wind;
