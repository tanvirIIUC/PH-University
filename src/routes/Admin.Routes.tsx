
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

  
 export const adminPaths = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      element: <AdminDashboard />,
    },
    {
      name: 'User Management',
      children: [
        {
          name: 'Create Admin',
          path: 'createAdmin',
          element: <CreateAdmin />,
        },
        {
          name: 'Create Faculty',
          path: 'createFaculty',
          element: <CreateFaculty />,
        },
        {
          name: 'Create Student',
          path: 'createStudent',
          element: <CreateStudent />,
        },
      ],
    },
  ];
  

  