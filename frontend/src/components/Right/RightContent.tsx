import React from "react";
import styles from "../../styles/Index.module.css";
import CustomTable from "./CustomTable";

const RightContent = () => {
  const currentHumidity = 67;
  return (
    <div className={`${styles.rightContainer}`}>
      <CustomTable />
    </div>
  );
};

export default RightContent;
