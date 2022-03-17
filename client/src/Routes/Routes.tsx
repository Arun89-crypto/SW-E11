import { useRoutes } from "react-router-dom";
import Feed from "../shared/components/Feed";
import Network from "../shared/components/Network";
import Dashboard from "../pages/dashboard";
import Activity from "../shared/components/Activity";

const AppRoutes = () => {
  const elements = useRoutes([
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        { path: "feed", element: <Feed /> },
        { path: "network", element: <Network /> },
        { path: "activity", element: <Activity /> },
        { path: "playground", element: <p>playground</p> },
        { path: "search", element: <p>search</p> },
        { path: "setting", element: <p>settings</p> },
        { path: "profile", element: <p>profile</p> },
        // Replace elements with the components you will be making
      ],
    },
  ]);
  return elements;
};

export default AppRoutes;
