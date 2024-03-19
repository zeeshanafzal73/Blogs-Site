import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "#7e22ce",
    animation: "$fadeIn 2s ease-in-out infinite alternate",
  },
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
});

const AnimatedText = () => {
  const arr = [
    "Data Structures",
    "Css",
    "Python",
    "React",
    "JavaScript",
    "Django",
    "Django RestFramework",
  ];

  const classes = useStyles();
  const [showText, setShowText] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowText(false);
      setCurrentTextIndex((prevIndex) =>
        prevIndex === arr.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} variant="h5">
        {showText ? "Html" : arr[currentTextIndex]}
      </Typography>
    </Box>
  );
};

export default AnimatedText;
