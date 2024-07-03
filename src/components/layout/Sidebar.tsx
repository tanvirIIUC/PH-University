import { Layout, Menu } from "antd";
import { adminPaths } from "../../routes/Admin.Routes";
import { SidebarItemGenerator } from "../../utils/SidebarItemsGenerator";

const { Sider } = Layout;

const Sidebar = () => {
  const userRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
  };

  const role = "admin";
  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = SidebarItemGenerator(adminPaths, "admin");
      break;
    case userRole.FACULTY:
      sidebarItems = SidebarItemGenerator(adminPaths, "faculty");
      break;
    case userRole.STUDENT:
      sidebarItems = SidebarItemGenerator(adminPaths, "student");
      break;

    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          textAlign: "center",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>PH University</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};
export default Sidebar;
