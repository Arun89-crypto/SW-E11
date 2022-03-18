import { StarBorderRounded } from "@mui/icons-material";
import { Avatar, Button, Container, Typography } from "@mui/material";
import React from "react";

interface feedpostparams {
  feedpost: {
    name: string;
    content: string[];
    profilepic: string;
    stars: string;
  };
}

const FeedPost: React.FC<feedpostparams> = ({ feedpost }) => {
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

export default FeedPost;
