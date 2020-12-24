import React from "react";
import styles from "../../styles/Center/WebcamImage.module.css";

const WebcamImage = () => {
  return (
    <img
      src="./test-image.jpg"
      alt="Current weather"
      className={`${styles.webcamImage} m-2`}
    />
  );
};

export default WebcamImage;
