import React from "react";
import styles from "../../styles/Center/Banner.module.css";
import transitionStyles from "../../styles/Transitions/Transitions.module.css";
import Rainfall from "./Rainfall";
import Temperature from "./Temperature";
import Time from "./Time";
import CurrentWeather from "./CurrentWeather";
import Wind from "./Wind";

const Banner = () => {
  return (
    <div
      className={`${styles.bannerContainer} ${transitionStyles.bannerContainer} p-2 m-2`}
    >
      {/* Top */}
      <Time />

      {/* Bottom */}
      <div className={`${styles.bottomContainer}`}>
        <CurrentWeather />
        <Temperature />
        <Rainfall />
        <Wind />
      </div>
    </div>
  );
};

export default Banner;
