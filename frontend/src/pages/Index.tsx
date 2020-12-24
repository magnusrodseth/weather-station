import React from "react";
import CenterContent from "../components/Center/CenterContent";
import LeftContent from "../components/Left/LeftContent";
import RightContent from "../components/Right/RightContent";
import styles from "../styles/Index.module.css";

const Index = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <LeftContent />
      <CenterContent />
      <RightContent />
    </div>
  );
};

export default Index;
