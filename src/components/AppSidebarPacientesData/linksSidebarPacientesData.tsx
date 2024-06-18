import { PathsSubRoutingProtected } from "@/router/enum/routerPaths";
import React from "react";
import { FaUsersRectangle } from "react-icons/fa6";
import { FaRegFileArchive } from "react-icons/fa";
import { MdHistoryToggleOff } from "react-icons/md";
import { RiFolderHistoryLine } from "react-icons/ri";
import { GiNotebook } from "react-icons/gi";
import { FaBook } from "react-icons/fa";

interface PropsMenuPacientesData {
  path: string;
  title: string;
  icon: React.JSX.Element;
}

export const menuPacientesData: PropsMenuPacientesData[] = [
  {
    path: PathsSubRoutingProtected.GESTIONES_PACIENTES_DATA_PERSONALES,
    title: "Datos Personales",
    icon: <FaUsersRectangle />,
  },
  {
    path: PathsSubRoutingProtected.GESTIONES_PACIENTES_DATA_ARCHIVOS,
    title: "Archivos",
    icon: <FaRegFileArchive />,
  },
  {
    path: PathsSubRoutingProtected.GESTIONES_PACIENTES_DATA_HISTORIAL_CITA,
    title: "H. Citas",
    icon: <MdHistoryToggleOff />,
  },
  {
    path: PathsSubRoutingProtected.GESTIONES_PACIENTES_DATA_HISTORIAL_CLINICA,
    title: "H. Clinica",
    icon: <RiFolderHistoryLine />,
  },

  {
    title: "H. Paciente",
    path: PathsSubRoutingProtected.GESTIONES_PACIENTES_DATA_HISTORIAL_PACIENTE,
    icon: <GiNotebook />,
  },
  {
    title: "Prescripciones",
    path: PathsSubRoutingProtected.GESTIONES_PACIENTES_PRESCRIPCIONES,
    icon: <FaBook />,
  },
];
