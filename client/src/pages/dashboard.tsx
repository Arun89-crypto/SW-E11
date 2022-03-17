import { Container } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        display: "flex",
        width: "100vw",
      }}
    >
      <Sidebar />
      <div style={{ width: "80%", height: "100vh" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
