// Icons
import { FaTabletAlt, FaUsersCog } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GrConfigure } from "react-icons/gr";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdMedicalServices, MdOutlineAdminPanelSettings } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

//
import { PropsSidebar } from "../Sidebar/types/typesLinks";
import {
  LabelMenuSidebarLinks,
  PathMenuSidebarLinks,
} from "./pathSidebarLinks";

const linksSidebarBar: PropsSidebar = {
  menu: [
    {
      label: LabelMenuSidebarLinks.DASHBOARD,
      path: PathMenuSidebarLinks.DASHBOARD,
      icon: <LuLayoutDashboard />,
    },
    {
      label: LabelMenuSidebarLinks.GESTIONES_PACIENTES,
      path: PathMenuSidebarLinks.GESTIONES_PACIENTES,
      icon: <FaUsersCog />,
    },
    {
      label: LabelMenuSidebarLinks.GESTIONES_CITAS,
      path: PathMenuSidebarLinks.GESTIONES_CITAS,
      icon: <FaTabletAlt />,
    },
    {
      label: LabelMenuSidebarLinks.GESTIONES_SERVICIOS,
      path: PathMenuSidebarLinks.GESTIONES_SERVICIOS,
      icon: <MdMedicalServices />,
    },
    {
      label: LabelMenuSidebarLinks.GESTIONES_MEDICOS,
      path: PathMenuSidebarLinks.GESTIONES_MEDICOS,
      icon: <FaUserDoctor />,
    },
    {
      label: LabelMenuSidebarLinks.GESTIONES_USUARIOS,
      path: PathMenuSidebarLinks.GESTIONES_USUARIOS,
      icon: <MdOutlineAdminPanelSettings />,
    },

    {
      label: LabelMenuSidebarLinks.REPORTES,
      path: PathMenuSidebarLinks.REPORTES,
      icon: <TbReportSearch />,
    },
    {
      label: LabelMenuSidebarLinks.CONFIGURACION,
      path: PathMenuSidebarLinks.CONFIGURACION,
      icon: <GrConfigure />,
    },
  ],
};
export default linksSidebarBar;

// esto va en el gestion de citas
// {
//   label: LabelMenuSidebarLinks.GESTIONES_HORARIOS,
//   path: PathMenuSidebarLinks.GESTIONES_HORARIOS,
//   icon: <Ri24HoursFill />,
// },

// esto va en el gestino de pacientes
// {
//   label: LabelMenuSidebarLinks.HISTORIAL_CLIENTE,
//   path: PathMenuSidebarLinks.HISTORIAL_CLIENTE,
//   icon: <FaBookMedical />,
// },
// {
//   label: LabelMenuSidebarLinks.HISTORIAL_CITAS,
//   path: PathMenuSidebarLinks.HISTORIAL_CITAS,
//   icon: <FaRegCalendarCheck />,
// },
