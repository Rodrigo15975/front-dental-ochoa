import { useLogout } from "@/services/auth";
import SidebarMenu from "../Sidebar/Sidebar";
import icon from "./icon.svg";
import linksSidebarBar from "./linksSiderbar";
const AppSidebar = () => {
  const { mutate } = useLogout();
  // PROBAR COMPARTIR IMG POR WAHATSSAP IMPORTANTE
  const logout = () => mutate();
  return (
    <>
      <SidebarMenu
        icon={icon}
        onClickBtn={logout}
        menu={linksSidebarBar.menu}
        rootStyles={{
          fontWeight: 800,
          color: "#0C0C0CBD",
          background: "#ffffff",
          // boxShadow: "none",
          border: "none",
          borderRight: "1px solid rgb(46, 77, 255)",
        }}
      />
    </>
  );
};

export default AppSidebar;
