import React, { ReactElement } from "react";
import { Button, Container, Typography } from "@mui/material";
import {
  AccountCircleRounded,
  AutoAwesomeMosaicRounded,
  BarChartRounded,
  HomeRounded,
  LogoutRounded,
  PeopleRounded,
  SearchRounded,
  SettingsRounded,
  SportsVolleyballRounded,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Container
      sx={{
        width: "20%",
        height: "100vh",
      }}
    >
      <div
        style={{
          minWidth: "100%",
        }}
      >
        <Link
          to="/dashboard/feed"
          style={{
            textDecoration: "none",
            color: "#000",
          }}
        >
          <Button
            sx={{
              display: "flex",
              p: 2,
              my: 1,
              width: "100%",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <AutoAwesomeMosaicRounded />
            <Typography
              sx={{
                marginLeft: "10px",
                fontSize: "13px",
              }}
            >
              Feed
            </Typography>
          </Button>
        </Link>
        <Button
          sx={{
            display: "flex",
            p: 2,
            my: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <PeopleRounded />
          <Typography sx={{ marginLeft: "10px", fontSize: "13px" }}>
            Network
          </Typography>
        </Button>
        <Button
          sx={{
            display: "flex",
            p: 2,
            my: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <BarChartRounded />
          <Typography sx={{ marginLeft: "10px", fontSize: "13px" }}>
            My Activity
          </Typography>
        </Button>
        <Button
          sx={{
            display: "flex",
            p: 2,
            my: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <SportsVolleyballRounded />
          <Typography sx={{ marginLeft: "10px", fontSize: "13px" }}>
            Playground
          </Typography>
        </Button>
        <Button
          sx={{
            display: "flex",
            p: 2,
            my: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <SearchRounded />
          <Typography sx={{ marginLeft: "10px", fontSize: "13px" }}>
            Search People
          </Typography>
        </Button>
        <Button
          sx={{
            display: "flex",
            p: 2,
            my: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <SettingsRounded />
          <Typography sx={{ marginLeft: "10px", fontSize: "13px" }}>
            Settings
          </Typography>
        </Button>
        <Button
          sx={{
            display: "flex",
            p: 2,
            my: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <AccountCircleRounded />
          <Typography sx={{ marginLeft: "10px", fontSize: "13px" }}>
            Profile
          </Typography>
        </Button>
        <Button
          sx={{
            display: "flex",
            p: 2,
            my: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <HomeRounded />
          <Typography sx={{ marginLeft: "10px", fontSize: "13px" }}>
            Home
          </Typography>
        </Button>
        <Button
          sx={{
            display: "flex",
            p: 2,
            my: 1,
            width: "100%",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <LogoutRounded />
          <Typography sx={{ marginLeft: "10px", fontSize: "13px" }}>
            Log Out
          </Typography>
        </Button>
      </div>
    </Container>
  );
};

export default Sidebar;
