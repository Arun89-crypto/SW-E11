import { RefreshRounded } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import FeedPost from "./FeedPost";

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
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">Feed</Typography>
        <Button>
          <Typography
            sx={{
              marginRight: "5px",
            }}
          >
            Refresh feed
          </Typography>
          <RefreshRounded />
        </Button>
      </Container>
      <FeedPost feedpost={feedpost} />
      <FeedPost feedpost={feedpost} />
      <FeedPost feedpost={feedpost} />
    </Container>
  );
};

export default Feed;
