import React from "react";
import styles from "../../styles/Index.module.css";
import WindDirection from "./WindDirection";

const LeftContent = () => {
  return (
    <div className={`${styles.leftContainer}`}>
      <WindDirection />
    </div>
  );
};

export default LeftContent;
