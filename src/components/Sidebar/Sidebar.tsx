import storeSidebarMobile from "@/store/storeSidebarMobile/storeSidebarMobile";
import { FC, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import Buttonlogout from "./Buttonlogou";
import { PropsSidebar } from "./types/typesLinks";

const SidebarMenu: FC<PropsSidebar> = ({
  menu,
  rootStyles,
  icon,
  onClickBtn,
}) => {
  const {
    setToggle,
    setCollapse,
    setScreenMobile,
    screenMobile,
    toggle,
    collapse,
  } = storeSidebarMobile();
  // Verifica si la pantalla es 926px y esconde el sidebar
  useEffect(() => {
    const handleResize = () => {
      setScreenMobile();
    };
    // Verificar si el ancho de la ventana es menor o igual a 926px

    // Llamar a handleResize cuando se carga la página y cuando se cambia el tamaño de la ventana
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener en la limpieza del efecto para evitar fugas de memoria
    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenMobile]);

  return (
    <div
      className={` ${
        collapse ? "min-w-[80px]" : "min-w-[250px]"
      } transition-all max-xl:hidden  h-screen`}
    >
      <Sidebar
        style={{
          background: "linear-gradient(190deg, #ffffff 0%, #ffffff 100%)",
          position: "fixed",
          height: "100%",
        }}
        // collapsed
        data-pr-tooltip=""
        collapsed={collapse}
        backgroundColor={screenMobile ? "white" : ""}
        toggled={toggle}
        onBackdropClick={() => setToggle()}
        rootStyles={{ ...rootStyles }}
        className="min-h-screen shadow-xl"
        // 992px
        breakPoint="lg"
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div>
              {collapse ? (
                <FaLongArrowAltRight
                  onClick={setCollapse}
                  className="text-4xl p-2 bg-bg_six text-default cursor-pointer"
                />
              ) : (
                <MdOutlineArrowBackIosNew
                  onClick={setCollapse}
                  className="text-4xl p-2 bg-bg_six text-default cursor-pointer"
                />
              )}
              <img
                src={icon}
                alt="icon-dental"
                className="h-auto w-[5rem] my-[1rem] m-auto"
              />
              {collapse ? (
                " "
              ) : (
                <p className="text-gradient-sidebar-bar font-robotoSlab_700 p-4 text-center text-xl">
                  Clinica Dental Ochoa
                </p>
              )}
              <p className="text-gradient-sidebar-bar px-[1rem] my-[1rem]">
                Menu
              </p>
            </div>
            <Menu>
              {menu.map((link) => (
                <div key={link.path}>
                  <MenuItem
                    icon={link.icon}
                    component={<NavLink to={link.path}></NavLink>}
                  >
                    {link.label}
                  </MenuItem>
                  {link.subMenu && (
                    <SubMenu
                      icon={link.subMenu[0].iconSubMenu}
                      label={link.subMenu[0].labelSubMenu}
                    >
                      {link.subMenu?.map((subMenu) => (
                        <MenuItem
                          key={subMenu.path}
                          icon={subMenu.icon}
                          component={<NavLink to={subMenu.path}></NavLink>}
                        >
                          {subMenu.label}
                        </MenuItem>
                      ))}
                    </SubMenu>
                  )}
                </div>
              ))}
            </Menu>
          </div>
          <Buttonlogout onClick={() => onClickBtn && onClickBtn()} />
        </div>
      </Sidebar>
    </div>
  );
};

export default SidebarMenu;
