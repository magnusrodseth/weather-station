import { Typography } from "@material-ui/core";
import React from "react";
import CenterContent from "../components/CenterContent";
import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent";
import styles from "../styles/Index.module.css";

const Index = () => {
  return (
    <div className={`${styles.wrapper}`}>
      {/* Left container */}
      <div className={`${styles.leftContainer}`}>
        <LeftContent />
      </div>

      {/* Center container */}
      <div className={`${styles.centerContainer}`}>
        <CenterContent />
      </div>

      {/* Right container */}
      <div className={`${styles.rightContainer}`}>
        <RightContent />
      </div>
    </div>
  );
};

export default Index;
