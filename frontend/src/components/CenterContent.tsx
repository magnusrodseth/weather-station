import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import styles from "../styles/Index.module.css";

const CenterContent = () => {
  return (
    <div className={`${styles.centerContainer}`}>
      <Typography align="center" variant="h2">
        22/12/20 kl. 17:31
      </Typography>
      <img
        src="./test-image.jpg"
        alt="Current weather"
        className={`${styles.webcamImage}`}
      />
    </div>
  );
};

export default CenterContent;
