
import { createBrowserRouter,} from "react-router-dom";
import App from "../App";
import { adminPaths} from "./Admin.Routes";
import { RouteGenerator } from "../utils/RoutesGenerator";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/admin",
    element: <App/>,
    children:RouteGenerator(adminPaths)
  },
]);

export default router;