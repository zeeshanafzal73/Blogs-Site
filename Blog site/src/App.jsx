import React from "react";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "@fontsource/poppins/400.css";
import HTML from "./components/html";
import JS from "./components/js";
import CSS from "./components/css";
import DJANGO from "./components/django";
import REACT from "./components/react";
import DRF from "./components/drf";
import PYTHON from "./components/python";
import NAVBAR from "./components/navbar/nav";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    fontWeightBold: 700,
  },
});
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
        <NAVBAR theme={theme} />
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/html" element={<HTML theme={theme} />} />
            <Route path="/css" element={<CSS theme={theme} />} />
            <Route path="/js" element={<JS theme={theme} />} />
            <Route path="/react" element={<REACT theme={theme} />} />
            <Route path="/django" element={<DJANGO theme={theme} />} />
            <Route path="/drf" element={<DRF theme={theme} />} />
            <Route path="/python" element={<PYTHON theme={theme} />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
