import {
  PageConfiguracion,
  PageDashboard,
  PageGestionCitas,
  PageGestionHorarios,
  PageGestionMedicos,
  PageGestionPacientes,
  PageGestionServicios,
  PageGestionUsuarios,
  PageReportes,
} from "@/pages";
import { PathsProtected } from "./enum/routerPaths";
import { IRouterProtected } from "./types/typeRouter";
import PageRecordatorio from "@/pages/pageRecordatorio/PageRecordatorio";

// Ingresa tus rutas
export const routerProtected: IRouterProtected[] = [
  {
    Componente: PageDashboard,
    path: PathsProtected.DASHBOARD,
  },
  {
    Componente: PageGestionPacientes,
    path: PathsProtected.GESTIONES_PACIENTES,
  },
  {
    Componente: PageGestionHorarios,
    path: PathsProtected.GESTIONES_HORARIOS,
  },
  {
    Componente: PageGestionCitas,
    path: PathsProtected.GESTIONES_CITAS,
  },
  {
    Componente: PageGestionServicios,
    path: PathsProtected.GESTIONES_SERVICIOS,
  },
  {
    Componente: PageGestionMedicos,
    path: PathsProtected.GESTIONES_MEDICOS,
  },
  {
    Componente: PageGestionUsuarios,
    path: PathsProtected.GESTIONES_USUARIOS,
  },
  {
    Componente: PageReportes,
    path: PathsProtected.REPORTES,
  },
  {
    Componente: PageConfiguracion,
    path: PathsProtected.CONFIGURACION,
  },
  {
    Componente: PageRecordatorio,
    path: PathsProtected.RECORDATORIO,
  },
];
