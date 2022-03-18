import React from "react";
import { Button, Container, Typography } from "@mui/material";
import {
  AccountCircleRounded,
  AutoAwesomeMosaicRounded,
  BarChartRounded,
  HomeRounded,
  LogoutRounded,
  PeopleRounded,
  SearchRounded,
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
        <Link
          to="/dashboard/network"
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
            <PeopleRounded />
            <Typography sx={{ marginLeft: "10px", fontSize: "13px" }}>
              Network
            </Typography>
          </Button>
        </Link>
        <Link
          to="/dashboard/activity"
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
            <BarChartRounded />
            <Typography sx={{ marginLeft: "10px", fontSize: "13px" }}>
              My Activity
            </Typography>
          </Button>
        </Link>
        <Link
          to="/dashboard/playground"
          style={{ textDecoration: "none", color: "#000" }}
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
            <SportsVolleyballRounded />
            <Typography sx={{ marginLeft: "10px", fontSize: "13px" }}>
              Playground
            </Typography>
          </Button>
        </Link>
        <Link
          to="/dashboard/search"
          style={{ textDecoration: "none", color: "#000" }}
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
            <SearchRounded />
            <Typography sx={{ marginLeft: "10px", fontSize: "13px" }}>
              Search People
            </Typography>
          </Button>
        </Link>
        {/* <Link
          to="/dashboard/setting"
          style={{ textDecoration: "none", color: "#000" }}
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
            <SettingsRounded />
            <Typography sx={{ marginLeft: "10px", fontSize: "13px" }}>
              Settings
            </Typography>
          </Button>
        </Link> */}
        <Link
          to="/dashboard/profile"
          style={{ textDecoration: "none", color: "#000" }}
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
            <AccountCircleRounded />
            <Typography sx={{ marginLeft: "10px", fontSize: "13px" }}>
              Profile
            </Typography>
          </Button>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
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
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
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
        </Link>
      </div>
    </Container>
  );
};

export default Sidebar;
