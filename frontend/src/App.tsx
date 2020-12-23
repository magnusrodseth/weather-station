import React from "react";
import Navbar from "./components/Navbar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Footer from "./components/Footer";
import Index from "./pages/Index";

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#f48fb1",
      },
      error: {
        main: "#f44336",
      },
      warning: {
        main: "#ff9800",
      },
      info: {
        main: "#2196f3",
      },
      success: {
        main: "#4caf50",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Index />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
