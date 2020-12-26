import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import Compass from "./Compass";
import transitionStyles from "../../styles/Transitions/Transitions.module.css";

const WindDirection = () => {
  return (
    <div className={`${transitionStyles.windDirectionContainer} p-3`}>
      <Typography variant="h4">Vindretning</Typography>
      <Compass
        degree={287}
        directions={["N", "NE", "E", "SE", "S", "SW", "W", "NW"]}
      />
    </div>
  );
};

export default WindDirection;
