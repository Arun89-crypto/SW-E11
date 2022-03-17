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
        maxWidth: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 1,
        m: 1,
        borderRadius: "10px",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Avatar src={image} alt="pp"></Avatar>
        <Typography sx={{ marginLeft: "10px" }}>{name}</Typography>
      </Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
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
