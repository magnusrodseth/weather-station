import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import transitionStyles from "../../styles/Transitions/Transitions.module.css";

const Humidity = () => {
  const min = 20;
  const max = 32;
  const current = 25;

  return (
    <div className={`${transitionStyles.humidityContainer} p-3`}>
      <Typography variant="h4">Luftfuktighet</Typography>
      <Typography variant="subtitle2">Minimum: {min}%</Typography>
      <Typography variant="subtitle2">Nå: {current}%</Typography>
      <Typography variant="subtitle2">Maximum: {max}%</Typography>
    </div>
  );
};

export default Humidity;
