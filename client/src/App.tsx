import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./Routes/Routes";
import Home from "./pages/home";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <AppRoutes />
      </Router>
    </>
  );
}
