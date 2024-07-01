
import { createBrowserRouter,} from "react-router-dom";
import App from "../App";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/admin",
    element: <App/>,
    children:[
        {
            index:true,
            element:<AdminDashboard/>
        },
        {
            path:'adminDashboard',
            element:<AdminDashboard/>
        },
        {
            path:'createStudent',
            element:<CreateStudent/>
        },
    ]
  },
]);

export default router;