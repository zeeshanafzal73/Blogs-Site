import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const linkedInProfileUrl = "https://www.linkedin.com/in/zeeshanaffzal/";
  const GitProfileUrl = "https://github.com/zeeshanafzal73";
  return (
    <>
      <Card
        sx={{
          maxWidth: 1550,
          marginTop: "110px",
          display: { xs: "none", md: "flex" },
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          boxShadow: "none",
          border: "none",
          borderRadius: "0px",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="footer">
              Z
            </Avatar>
          }
          title={
            <Typography variant="h6" color="text.primary">
              CodeWithZishi |
            </Typography>
          }
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <Typography variant="body2" color="text.secondary" textAlign="center">
          Copyright © 2024 CodeWithZishi
        </Typography>
        <a href={linkedInProfileUrl} target="_blank">
          <LinkedInIcon
            fontSize="large"
            color="primary"
            style={{ cursor: "pointer", paddingLeft: "10px" }}
          />
        </a>
        <a href={GitProfileUrl} target="_blank">
          <GitHubIcon
            fontSize="large"
            color="primary"
            style={{ cursor: "pointer", paddingLeft: "10px" }}
          />
        </a>
      </Card>
      <Card
        sx={{
          maxWidth: 1550,
          marginTop: "110px",
          display: { xs: "flex", md: "none" },
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          boxShadow: "none",
          border: "none",
          borderRadius: "0px",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="footer">
              Z
            </Avatar>
          }
          title={
            <Typography variant="h6" color="text.primary">
              CodeWithZishi
            </Typography>
          }
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <div>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            Copyright © 2024 CodeWithZishi
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <a href={linkedInProfileUrl} target="_blank">
            <LinkedInIcon
              fontSize="large"
              color="primary"
              style={{ cursor: "pointer", paddingLeft: "10px" }}
            />
          </a>
          <a href={GitProfileUrl} target="_blank">
            <GitHubIcon
              fontSize="large"
              color="primary"
              style={{ cursor: "pointer", paddingLeft: "10px" }}
            />
          </a>
        </div>
      </Card>
    </>
  );
};

export default Footer;
