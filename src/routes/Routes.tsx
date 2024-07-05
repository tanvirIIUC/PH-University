import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminPaths } from "./Admin.Routes";
import { RouteGenerator } from "../utils/RoutesGenerator";
import Login from "../pages/Login";
import ProtectedRoutes from "../components/layout/ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoutes>
        <App />
      </ProtectedRoutes>
    ),
    children: RouteGenerator(adminPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
