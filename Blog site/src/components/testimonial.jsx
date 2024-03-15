import React from "react";
import { Grid, Typography, Card, CardContent, Box } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonial = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          marginTop: "150px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Testimonials
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          marginTop: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Testimonials
        </Typography>
      </Box>

      <Grid
        container
        mt={4}
        spacing={3}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              maxWidth: 690,
              maxHeight: 200,
              marginTop: "15px",
              display: "inline-block",
              marginLeft: "70px",
              // overflow: "auto",
            }}
          >
            <CardContent sx={{ backgroundColor: "rgb(243 244 246)" }}>
              <FormatQuoteIcon sx={{ color: "rgb(75 85 99)" }} />
              <Typography
                variant="body1"
                component="div"
                sx={{ color: "rgb(75 85 99)" }}
                mt={1}
                mb={1}
              >
                I don't have words to thank this man, I'm really grateful to
                have this channel and website in my daily routine. If you're a
                mere beginner, then you can trust this guy and can put your time
                into his content.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Mohit Kumar
                <br />
              </Typography>
              <Typography sx={{ color: "rgb(75 85 99)" }}>
                Web Developer
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              maxWidth: 690,
              maxHeight: 200,
              marginTop: "15px",
              display: "inline-block",
              // overflow: "auto",
            }}
          >
            <CardContent sx={{ backgroundColor: "rgb(243 244 246)" }}>
              <FormatQuoteIcon sx={{ color: "rgb(75 85 99)" }} />
              <Typography
                variant="body1"
                sx={{ color: "rgb(75 85 99)" }}
                mt={1}
                mb={1}
              >
                For everyone who wants to level up their #Coding and #Dev skills
                - seriously, this channel is for you! Both basic and advanced
                stacks are covered on this channel, and one can learn according
                to his skill levels.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Rakesh Shetty
                <br />
              </Typography>
              <Typography sx={{ color: "rgb(75 85 99)" }}>
                Web Developer
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        mt={4}
        spacing={3}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              maxWidth: 350,
              maxHeight: 400,
              marginTop: "15px",
              marginBottom: "15px",
              display: "inline-block",
              marginLeft: "10px",
            }}
          >
            <CardContent sx={{ backgroundColor: "rgb(243 244 246)" }}>
              <FormatQuoteIcon sx={{ color: "rgb(75 85 99)" }} />
              <Typography
                variant="body1"
                sx={{ color: "rgb(75 85 99)" }}
                mt={1}
                mb={1}
                gutterBottom
              >
                I don't have words to thank this man, I'm really grateful to
                have this channel and website in my daily routine. If you're a
                mere beginner, then you can trust this guy and can put your time
                into his content. I can assure you that it'll be worth it.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Mohit Kumar
                <br />
              </Typography>
              <Typography sx={{ color: "rgb(75 85 99)" }}>
                Web Developer
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              maxWidth: 350,
              maxHeight: 400,
              marginTop: "15px",
              display: "inline-block",
              marginLeft: "10px",
            }}
          >
            <CardContent sx={{ backgroundColor: "rgb(243 244 246)" }}>
              <FormatQuoteIcon sx={{ color: "rgb(75 85 99)" }} />
              <Typography
                variant="body1"
                sx={{ color: "rgb(75 85 99)" }}
                mt={1}
                mb={1}
                gutterBottom
              >
                For everyone who wants to level up their #Coding and #Dev skills
                - seriously, this channel is for you! Both basic and advanced
                stacks are covered on this channel, and one can learn according
                to his skill levels.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "black", fontWeight: "bold" }}
              >
                Rakesh Shetty
                <br />
              </Typography>
              <Typography sx={{ color: "rgb(75 85 99)" }}>
                Web Developer
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Testimonial;
