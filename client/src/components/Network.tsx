import React from "react";
import { Container, Typography } from "@mui/material";

const Network = () => {
  return (
    <Container
      sx={{
        p: 2,
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        justifyContent: "flex-start",
        overflow: "scroll",
        maxHeight: "100vh",
        position: "relative",
      }}
    >
      <Typography variant="h4">Your Network</Typography>
    </Container>
  );
};

const FollowingSection = () => {
  return (
    <Container
      sx={{
        maxWidth: "500px",
      }}
    ></Container>
  );
};

export default Network;
