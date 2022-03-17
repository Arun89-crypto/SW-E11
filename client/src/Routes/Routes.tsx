import { useRoutes } from "react-router-dom";
import Dashboard from "../pages/dashboard";

const AppRoutes = () => {
  const elements = useRoutes([
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        { path: "feed", element: <p>feed</p> },
        { path: "search", element: <p>search</p> },
        // Add dashboard routes here
      ],
    },
  ]);
  return elements;
};

export default AppRoutes;
