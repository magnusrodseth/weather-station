import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/Navbar.module.css";
import HelpIcon from "@material-ui/icons/Help";
import IconButton from "@material-ui/core/IconButton/IconButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar variant="regular">
          <img src="./logo.png" alt="Logo" className={`${styles.logo}`} />
          <Typography variant="h4" color="inherit" className={classes.title}>
            Været på Søbekkseter
          </Typography>
          <IconButton
            onClick={() => {
              console.log("Clicked help");
            }}
            edge="end"
          >
            <HelpIcon color="inherit" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
