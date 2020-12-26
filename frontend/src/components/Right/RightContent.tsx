import React from "react";
import styles from "../../styles/Index.module.css";
import Humidity from "./Humidity";

const RightContent = () => {
  const currentHumidity = 67;
  return (
    <div className={`${styles.rightContainer}`}>
      <Humidity />
    </div>
  );
};

export default RightContent;
