import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const HeroSection = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} style={{ padding: "0 50px" }}>
            <Item elevation={0}>
              <Typography variant="h3" gutterBottom>
                Welcome to CodeWithZishi
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
                color="primary"
                sx={{ marginRight: 2 }}
              >
                Free Courses
              </Button>
              <Button variant="outlined" color="primary">
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
