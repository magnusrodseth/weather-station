import React from "react";
import styles from "../../styles/Index.module.css";
import Banner from "./Banner";
import WebcamImage from "./WebcamImage";

const CenterContent = () => {
  return (
    <div className={`${styles.centerContainer}`}>
      <Banner />
      <WebcamImage />
    </div>
  );
};

export default CenterContent;
