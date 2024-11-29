export const enum PathServices {
  URL = 'https://backend-dental-production-21f5.up.railway.app',
  // URL = 'http://localhost:4000',
  LOGIN = '/auth/login',
  LOGOUT = '/auth/logout',
  ACCESSTOKEN = '/auth/verify',
  DETALLE = '/detalle',
  CONSULTORIOFILELOGO = '/consultorio/logo',
  CONSULTORIOFILEPORTADA = '/consultorio/portada',
  CONSULTORIO = '/consultorio',

  APODERADO = '/apoderado',
  FILEUSUARIO = '/usuarios/file',
  USUARIOS = '/usuarios',
  PROFILE = '/auth/profile',
  MEDICOS = '/medicos',

  DETALLES_SERVICIOS = '/detalles-servicios',
  ESTADO_SERVICIO = '/estado-servicio',

  ARCHIVO = '/archivos',
  PACIENTES = '/PACIENTES',
  CITAS = '/citas',

  ACTIVE_MEDICO = '/active/medico',

  ALERGIA = '/alergias',
  NOTA = '/nota',

  ESTADO_CITA = '/estado-cita',

  PRESCRIPCIONES = '/prescripciones',
  RECETAS = '/recetas',
  HISTORIAL_CLINICA = '/historial-clinica',

  SERVICIOS = '/servicios',
  ASIGNAR_SERVICIOS = '/medicos/create-services',

  HORARIO = '/horario',

  ASISTENCIA = '/asistencia',
  ETIQUETAS = '/etiquetas',

  DNI = '/api-dni?dni=',
  RUC = '/ruc?ruc=',
}