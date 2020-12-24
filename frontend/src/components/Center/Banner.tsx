import React from "react";
import styles from "../../styles/Center/Banner.module.css";
import Rainfall from "./Rainfall";
import Temperature from "./Temperature";
import Time from "./Time";
import WeatherIcon from "./WeatherIcon";
import Wind from "./Wind";

const Banner = () => {
  return (
    <div className={`${styles.bannerContainer} m-4`}>
      {/* Top */}
      <div className={`${styles.topContainer}`}>
        <Time />
      </div>

      {/* Bottom */}
      <div className={`${styles.bottomContainer}`}>
        <WeatherIcon />
        <Temperature />
        <Rainfall />
        <Wind />
      </div>
    </div>
  );
};

export default Banner;
