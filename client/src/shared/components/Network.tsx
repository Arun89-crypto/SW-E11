import React from "react";
import { Container, Typography } from "@mui/material";
import ProfileBar from "./ProfileBar";

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
      <FollowingSection />
      <Typography variant="h6">People Just like you</Typography>
      <PeopleLikeYouSection />
    </Container>
  );
};

const FollowingSection = () => {
  return (
    <Container
      sx={{
        my: 2,
      }}
    >
      <ProfileBar
        name="Miguel llamo"
        image="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fG1leGljYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        followed={true}
      ></ProfileBar>
      <ProfileBar
        name="Calino Spinski"
        image="https://images.unsplash.com/photo-1537314258490-7f581ad90fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
        followed={true}
      ></ProfileBar>
    </Container>
  );
};

const PeopleLikeYouSection = () => {
  return (
    <Container
      sx={{
        my: 2,
      }}
    >
      <ProfileBar
        name="Hernando Guera"
        image="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fG1leGljYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        followed={false}
      ></ProfileBar>
      <ProfileBar
        name="Calino Khadyrov"
        image="https://images.unsplash.com/photo-1537314258490-7f581ad90fd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80"
        followed={false}
      ></ProfileBar>
    </Container>
  );
};

export default Network;
