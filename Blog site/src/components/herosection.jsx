import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import React, { useState, useEffect } from "react";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const HeroSection = () => {
  //for text animations
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
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Grid item xs={12} md={6} style={{ padding: "0 50px" }}>
            <Item elevation={0}>
              <Typography variant="h3" gutterBottom>
                Welcome to{" "}
                <span style={{ color: "#7e22ce" }}>CodeWithZishi</span>
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ display: "flex" }}>
                Learn{" "}
                <Typography
                  className={classes.title}
                  variant="h5"
                  sx={{ paddingLeft: "10px" }}
                >
                  {showText ? "Html" : arr[currentTextIndex]}
                </Typography>
              </Typography>

              <Typography variant="h5" gutterBottom></Typography>
              <Typography paragraph>
                Confused on which course to take? I have got you covered. Browse
                courses and find out the best course for you. It's free! Code
                With Harry is my attempt to teach basics and those coding
                techniques to people in short time which took me ages to learn.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginRight: 2,
                  color: "white",
                  backgroundColor: "#7e22ce",
                  borderColor: "#7e22ce", // Change border color to match outline color
                  "&:hover": {
                    borderColor: "#7e22ce", // Change border color on hover
                    // Change background color on hover
                  },
                }}
              >
                Free Courses
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "#7e22ce",
                  borderColor: "#7e22ce", // Change border color to match outline color
                  "&:hover": {
                    borderColor: "#7e22ce", // Change border color on hover
                  },
                }}
              >
                Explore Blog
              </Button>
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="194"
              image="/src/assets/hero.avif"
              alt="Paella dish"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
                clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)",
                position: "relative",
                zIndex: "-1",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1 }} mt={3}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <Grid item xs={12} md={6} style={{ padding: "0 50px" }}>
            <Item elevation={0}>
              <Typography variant="h4" gutterBottom>
                Welcome <span style={{ textAlign: "center" }}>to</span>{" "}
                <span style={{ color: "#7e22ce" }}>CodeWithZishi</span>
              </Typography>
              <Typography variant="h5" gutterBottom>
                Learn DSA
              </Typography>
              <Typography paragraph>
                Confused on which course to take? I have got you covered. Browse
                courses and find out the best course for you. It's free! Code
                With Harry is my attempt to teach basics and those coding
                techniques to people in short time which took me ages to learn.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginRight: 2,
                  color: "white",
                  backgroundColor: "#7e22ce",
                  borderColor: "#7e22ce", // Change border color to match outline color
                  "&:hover": {
                    borderColor: "#7e22ce", // Change border color on hover
                    // Change background color on hover
                  },
                }}
              >
                Free Courses
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "#7e22ce",
                  borderColor: "#7e22ce", // Change border color to match outline color
                  "&:hover": {
                    borderColor: "#7e22ce", // Change border color on hover
                  },
                }}
              >
                Explore Blog
              </Button>
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="194"
              image="/src/assets/hero.avif"
              alt="Paella dish"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
                clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)",
                position: "relative",
                zIndex: "-1",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeroSection;
