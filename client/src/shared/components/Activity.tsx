import { Container, Typography, Button } from "@mui/material";
import React from "react";
import FeedPost from "./FeedPost";
import { DeleteRounded } from "@mui/icons-material";
interface feedpostparams {
  feedpost: {
    name: string;
    content: string[];
    profilepic: string;
    stars: string;
  };
}

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

const Activity = () => {
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
      <Typography variant="h4">My Activity</Typography>
      <PostBlock feedpost={feedpost} />
    </Container>
  );
};

const PostBlock: React.FC<feedpostparams> = ({ feedpost }) => {
  return (
    <Container>
      <FeedPost feedpost={feedpost} />
      <Button
        sx={{
          marginTop: "10px",
        }}
      >
        <DeleteRounded />
        <Typography>Delete post</Typography>
      </Button>
    </Container>
  );
};

export default Activity;
