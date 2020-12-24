import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import ScheduleIcon from "@material-ui/icons/Schedule";
import styles from "../../styles/Center/Banner.module.css";

const Time = () => {
  return (
    <div className={`${styles.topContainer} m-2`}>
      <ScheduleIcon className={`m-1`} />
      <Typography variant="h6" className={`m-1`}>
        22/12/20 kl. 17:31
      </Typography>
    </div>
  );
};

export default Time;
