import { PathMenuSidebarLinks } from "@/components/AppSidebar/pathSidebarLinks";

// Nombres de las rutas(path)
export enum PathsPublic {
  // EXAMPLE
  INICIO = "/",
  NETWORKERROR = "/network-error",
}
export enum PathsProtected {
  // EXAMPLE
  DASHBOARD = PathMenuSidebarLinks.DASHBOARD,
  GESTIONES_PACIENTES = PathMenuSidebarLinks.GESTIONES_PACIENTES,
  GESTIONES_HORARIOS = PathMenuSidebarLinks.GESTIONES_HORARIOS,
  GESTIONES_CITAS = PathMenuSidebarLinks.GESTIONES_CITAS,
  GESTIONES_SERVICIOS = PathMenuSidebarLinks.GESTIONES_SERVICIOS,
  GESTIONES_MEDICOS = PathMenuSidebarLinks.GESTIONES_MEDICOS,
  GESTIONES_USUARIOS = PathMenuSidebarLinks.GESTIONES_USUARIOS,
  HISTORIAL_CLIENTE = PathMenuSidebarLinks.HISTORIAL_CLIENTE,
  HISTORIAL_CITAS = PathMenuSidebarLinks.HISTORIAL_CITAS,
  CONFIGURACION = PathMenuSidebarLinks.CONFIGURACION,
  REPORTES = PathMenuSidebarLinks.REPORTES,
}

export enum PathsSubRoutingProtected {
  GESTIONES_PACIENTES_DATA_PERSONALES = `${PathMenuSidebarLinks.GESTIONES_PACIENTES}/datos-personales`,
  GESTIONES_PACIENTES_DATA_HISTORIAL_PACIENTE = `${PathMenuSidebarLinks.GESTIONES_PACIENTES}/historial-paciente`,
  GESTIONES_PACIENTES_DATA_HISTORIAL_CLINICA = `${PathMenuSidebarLinks.GESTIONES_PACIENTES}/historial-clinica`,
  GESTIONES_PACIENTES_DATA_HISTORIAL_CITA = `${PathMenuSidebarLinks.GESTIONES_PACIENTES}/historial-citas/`,
  GESTIONES_PACIENTES_DATA_ARCHIVOS = `${PathMenuSidebarLinks.GESTIONES_PACIENTES}/archivos`,
  GESTIONES_PACIENTES_PRESCRIPCIONES = `${PathMenuSidebarLinks.GESTIONES_PACIENTES}/prescripciones`,
}
