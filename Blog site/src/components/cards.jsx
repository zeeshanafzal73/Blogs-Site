import * as React from "react";
import { Button, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ReactImg from "../assets/react.png";

const Cards = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          marginTop: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Recommended Courses
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          marginTop: "40px",
          marginLeft: "50px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Recommended Courses
        </Typography>
      </Box>
      <Grid container mt={4} sx={{ display: { xs: "none", md: "flex" } }}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              maxWidth: 390,
              marginTop: "15px",
              display: "inline-block",
              marginLeft: "70px",
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={ReactImg}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                React is a free and open-source front-end JavaScript library.
                This series will cover React from starting to the end. We will
                learn react from the ground up!
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  color: "#7e22ce",
                  borderColor: "#7e22ce", // Change border color to match outline color
                  "&:hover": {
                    borderColor: "#7e22ce", // Change border color on hover
                  },
                }}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              maxWidth: 390,
              marginTop: "15px",
              display: "inline-block",
              marginLeft: "50px",
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={ReactImg}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                React is a free and open-source front-end JavaScript library.
                This series will cover React from starting to the end. We will
                learn react from the ground up!
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  color: "#7e22ce",
                  borderColor: "#7e22ce", // Change border color to match outline color
                  "&:hover": {
                    borderColor: "#7e22ce", // Change border color on hover
                  },
                }}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              maxWidth: 390,
              marginTop: "15px",
              display: "inline-block",
              marginLeft: "40px",
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={ReactImg}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                React is a free and open-source front-end JavaScript library.
                This series will cover React from starting to the end. We will
                learn react from the ground up!
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  color: "#7e22ce",
                  borderColor: "#7e22ce", // Change border color to match outline color
                  "&:hover": {
                    borderColor: "#7e22ce", // Change border color on hover
                  },
                }}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container mt={4} sx={{ display: { xs: "flex", md: "none" } }}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              maxWidth: 300,
              marginTop: "15px",
              display: "inline-block",
              marginLeft: "35px",
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={ReactImg}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                React is a free and open-source front-end JavaScript library.
                This series will cover React from starting to the end. We will
                learn react from the ground up!
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  color: "#7e22ce",
                  borderColor: "#7e22ce", // Change border color to match outline color
                  "&:hover": {
                    borderColor: "#7e22ce", // Change border color on hover
                  },
                }}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              maxWidth: 300,
              marginTop: "15px",
              display: "inline-block",
              marginLeft: "35px",
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={ReactImg}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                React is a free and open-source front-end JavaScript library.
                This series will cover React from starting to the end. We will
                learn react from the ground up!
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  color: "#7e22ce",
                  borderColor: "#7e22ce", // Change border color to match outline color
                  "&:hover": {
                    borderColor: "#7e22ce", // Change border color on hover
                  },
                }}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              maxWidth: 300,
              marginTop: "15px",
              display: "inline-block",
              marginLeft: "35px",
            }}
          >
            <CardMedia
              component="img"
              height="300"
              image={ReactImg}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                React is a free and open-source front-end JavaScript library.
                This series will cover React from starting to the end. We will
                learn react from the ground up!
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  mt: 2,
                  color: "#7e22ce",
                  borderColor: "#7e22ce", // Change border color to match outline color
                  "&:hover": {
                    borderColor: "#7e22ce", // Change border color on hover
                  },
                }}
              >
                Learn More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Cards;
