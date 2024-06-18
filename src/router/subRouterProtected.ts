import { PathsSubRoutingProtected } from "./enum/routerPaths";
import { IRouterProtected } from "./types/typeRouter";
import PageHistorialDecitas from "@/pages/pageGestionPacientesData/pageHistorialDeCitas/PageHistorialDecitas";
import {
  PageArchivos,
  PageDatosPersonales,
  PageHistorialClinica,
  PageHistorialDelPaciente,
} from "@/pages";
import PagePrescripciones from "@/pages/pageGestionPacientesData/pagePrescripciones/PagePrescripciones";

export const subRouterProtected: IRouterProtected[] = [
  // tiene que rediregir directamente al datos personales
  {
    Componente: PageDatosPersonales,
    path: PathsSubRoutingProtected.GESTIONES_PACIENTES_DATA_PERSONALES + "/:id",
  },
  {
    Componente: PageArchivos,
    path: PathsSubRoutingProtected.GESTIONES_PACIENTES_DATA_ARCHIVOS + "/:id",
  },
  {
    Componente: PageHistorialDecitas,
    path:
      PathsSubRoutingProtected.GESTIONES_PACIENTES_DATA_HISTORIAL_CITA + "/:id",
  },
  {
    Componente: PageHistorialClinica,
    path:
      PathsSubRoutingProtected.GESTIONES_PACIENTES_DATA_HISTORIAL_CLINICA +
      "/:id",
  },
  {
    Componente: PageHistorialDelPaciente,
    path: `${PathsSubRoutingProtected.GESTIONES_PACIENTES_DATA_HISTORIAL_PACIENTE}/:id`,
  },
  {
    Componente: PagePrescripciones,
    path: `${PathsSubRoutingProtected.GESTIONES_PACIENTES_PRESCRIPCIONES}/:id`,
  },
];
