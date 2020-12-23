import { Typography } from "@material-ui/core";
import React from "react";
import CenterContent from "../components/CenterContent";
import LeftContent from "../components/LeftContent";
import RightContent from "../components/RightContent";
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
