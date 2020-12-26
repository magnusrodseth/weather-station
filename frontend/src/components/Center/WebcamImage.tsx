import React from "react";
import transitionStyles from "../../styles/Transitions/Transitions.module.css";

const WebcamImage = () => {
  return (
    <img
      src="./test-image.jpg"
      alt="Current weather"
      width="90%"
      className={`${transitionStyles.webcamImage} m-2`}
    />
  );
};

export default WebcamImage;
