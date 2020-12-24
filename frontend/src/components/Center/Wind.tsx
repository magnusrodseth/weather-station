import React from "react";
import styles from "../../styles/Center/Banner.module.css";

const Wind = () => {
  return (
    <div className={`${styles.windContainer} m-2`}>
      <img
        src="./icons/wind.png"
        alt="Wind Icon"
        className={`${styles.icon}`}
      />
    </div>
  );
};

export default Wind;
