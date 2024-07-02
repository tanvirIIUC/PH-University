import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { adminSidebarItems } from '../../routes/Admin.Routes';
/* import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { createElement } from 'react'; */
const { Header, Content, Sider } = Layout;

const MainLayout = ()=>{
/*     const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
        (icon, index) => ({
          key: String(index + 1),
          icon: createElement(icon),
          label: `nav ${index + 1}`,
        }),
      ); */
    /*   const items = [
        {
          key:'adminDashboard',
          label:<NavLink to='/admin/adminDashboard'>Dashboard</NavLink>,
        
        },
        {
          key:'User Management',
          label:'User Management',
          children:[
            {
              key:'createAdmin',
              label:<NavLink to='/admin/createAdmin'>Create Admin</NavLink>,
            },
            {
              key:'createFaculty',
              label:<NavLink to='/admin/createFaculty'>Create Faculty</NavLink>,
            },
            {
              key:'createStudent',
              label:<NavLink to='/admin/createStudent'>Create Student</NavLink>,
            },
          ]
          
        },
       
      ] */
    return (
        <Layout style={{height:'100vh'}}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div style={{color:'white', textAlign:'center',height:'60px',display:'flex', alignItems:'center',justifyContent:'center'}}>
            <h1>PH University</h1>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={adminSidebarItems} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, }} />
          <Content style={{ margin: '24px 16px 0' }}>
          {/*   <div
              style={{
                padding: 24,
                minHeight: 360,
               
              }}
            >
              content
            </div> */}
            <Outlet/>
          </Content>
         {/*  <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer> */}
        </Layout>
      </Layout>
    );
};
export default MainLayout;