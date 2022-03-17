import { Avatar, Container, Typography } from "@mui/material";
import React from "react";

interface profilebarparams {
  image: string;
  name: string;
  followed: boolean;
}

const ProfileBar: React.FC<profilebarparams> = ({ image, name, followed }) => {
  return (
    <Container
      sx={{
        width: "100%",
        background: "#F6F6F6",
      }}
    >
      <Container>
        <Avatar src={image} alt="pp"></Avatar>
        <Typography>{name}</Typography>
      </Container>
      <Container>
        {followed ? (
          <Typography>Remove</Typography>
        ) : (
          <Typography>Add</Typography>
        )}
      </Container>
    </Container>
  );
};

export default ProfileBar;
