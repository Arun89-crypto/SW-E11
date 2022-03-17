import { StarBorderRounded } from "@mui/icons-material";
import { Avatar, Button, Container, Typography } from "@mui/material";
import React from "react";

const feedpost = {
  name: "Graviana Alexei",
  stars: "45",
  content: [
    "Played Guitar 🎸",
    "Walking my jack 🐕",
    "Learnt cooking Burrito 🌯",
  ],
  profilepic:
    "https://images.unsplash.com/photo-1598507619174-04d674f7fb95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
};

const Feed = () => {
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
      <Typography variant="h4">Feed</Typography>
      <FeedPostComp />
      <FeedPostComp />
      <FeedPostComp />
    </Container>
  );
};

const FeedPostComp = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "400px",
        minHeight: "300px",
        border: "1px solid #C4C4C4",
        marginTop: "15px",
        borderRadius: "20px",
      }}
    >
      {/*This will be the post content*/}
      <Container
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-center",
          p: 2,
        }}
      >
        <ul>
          {feedpost.content.map((cont) => {
            return <li>{cont}</li>;
          })}
        </ul>
      </Container>
      {/*This will be the post info*/}
      <Container
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-center",
          p: 2,
        }}
      >
        <Button>
          <StarBorderRounded />
        </Button>
        {feedpost.stars}
      </Container>
      <Container
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-center",
          p: 2,
        }}
      >
        <Avatar src={feedpost.profilepic} alt="pp"></Avatar>
        <Typography
          sx={{
            marginLeft: "10px",
          }}
        >
          {feedpost.name}
        </Typography>
      </Container>
    </div>
  );
};

export default Feed;
