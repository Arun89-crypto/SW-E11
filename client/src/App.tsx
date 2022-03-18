import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup } from './pages/signup';
import Welcome from './pages/welcome';
import AppRoutes from "./Routes/Routes";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup />
          }
        />
        <Route
          path="/welcome"
          element={
            <Welcome />
          }
        />
      </Routes>
      <AppRoutes />
    </Router>
  );
}