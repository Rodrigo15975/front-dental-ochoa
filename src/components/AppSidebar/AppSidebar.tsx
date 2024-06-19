import { useLogout } from "@/services/auth";
import SidebarMenu from "../Sidebar/Sidebar";
import icon from "./icon.svg";
import linksSidebarBar from "./linksSiderbar";
import { useGetEmpresa } from "@/services/configuracion";
import { capitalize } from "@/utils";
import { storeSidebarMobile } from "@/store";
import { ButtonIcon } from "../Common";
import { IoMdMenu } from "react-icons/io";
const AppSidebar = () => {
  const { screenMobile, setToggle } = storeSidebarMobile();

  const { mutate } = useLogout();
  const { data } = useGetEmpresa();
  // PROBAR COMPARTIR IMG POR WAHATSSAP IMPORTANTE
  const logout = () => mutate();
  const nameEmpresa = capitalize(data?.nombre_comercial ?? "");

  return (
    <>
      <SidebarMenu
        icon={icon}
        onClickBtn={logout}
        menu={linksSidebarBar.menu}
        nameEmpresa={nameEmpresa}
        rootStyles={{
          fontWeight: 800,
          color: "#0C0C0CBD",
          background: "#ffffff",
          // boxShadow: "none",
          border: "none",
          borderRight: "1px solid rgb(46, 77, 255)",
        }}
      />
      {screenMobile && (
        <ButtonIcon
          onClick={setToggle}
          className="fixed text-text_default flex items-center justify-center bottom-0 z-50 h-[4rem] w-[4rem] bg-bg_secondary/50 rounded-md border shadow-md"
        >
          <IoMdMenu className="text-4xl" />
        </ButtonIcon>
      )}
    </>
  );
};

export default AppSidebar;
