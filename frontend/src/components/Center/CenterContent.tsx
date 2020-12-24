import React from "react";
import styles from "../../styles/Index.module.css";
import Banner from "./Banner";

const CenterContent = () => {
  return (
    <div className={`${styles.centerContainer}`}>
      <Banner />
      <img
        src="./test-image.jpg"
        alt="Current weather"
        className={`${styles.webcamImage}`}
      />
    </div>
  );
};

export default CenterContent;
