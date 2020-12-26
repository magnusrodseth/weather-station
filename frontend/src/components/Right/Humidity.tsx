import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import transitionStyles from "../../styles/Transitions/Transitions.module.css";

const Humidity = () => {
  return (
    <div className={`${transitionStyles.humidityContainer} p-3`}>
      <Typography variant="h4">Luftfuktighet</Typography>
      <p>
        Est sed unde ut sit. Reprehenderit tempore animi laboriosam fugiat
        pariatur repellendus non temporibus sit.
      </p>
    </div>
  );
};

export default Humidity;
