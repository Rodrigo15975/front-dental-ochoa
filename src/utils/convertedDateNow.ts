import { format, isValid, parse } from "date-fns";
import dayjs from "dayjs";
import { capitalize } from "./convertedCapitalize";
dayjs.locale("es");

export function transformDate(value: string): Date | null {
  const date = parse(value, "dd/MM/yyyy", new Date());
  return isValid(date) ? date : null;
}

export const registerDateNow = () => {
  const fechaActual = new Date();
  const fechaFormateada = format(fechaActual, "dd-MM-yyyy");
  return fechaFormateada;
};

export const registerDateInternational = () => {
  const fechaActual = new Date();
  const fechaFormateada = format(fechaActual, "yyyy-MM-dd");
  return fechaFormateada;
};
export const hourNowDate = () => dayjs().format("HH:mm:ss");

export const nameCompletDate = () => {
  const fecha = dayjs();

  // Formatea la fecha para obtener el nombre del mes, el día de la semana y el año
  const nombreMes = fecha.format("MMMM");
  const diaSemana = fecha.format("dddd");
  // const año = fecha.format("YYYY");
  const capitalizeMes = capitalize(nombreMes);
  const capitalizeSemana = capitalize(diaSemana);

  return `${capitalizeMes}-${capitalizeSemana}`;
};

export function formatearFecha(fechaString: string | undefined) {
  const fecha = dayjs(fechaString, "DD/MM/YYYY");

  const fechaFormateada = fecha.format("YYYY-MM-DD");

  // salida 1999-09-20
  return fechaFormateada;
}

export const esCumpleañosHoy = (fechaNacimiento: string | Date) => {
  const hoy = dayjs();
  const cumpleanos = dayjs(fechaNacimiento).year(hoy.year());

  // Si el cumpleaños ya pasó este año, ajustamos al próximo año
  if (cumpleanos.isBefore(hoy, "day")) {
    cumpleanos.add(1, "year");
  }

  return hoy.isSame(cumpleanos, "day");
};

// Función para calcular los días restantes hasta el próximo cumpleaños
export const faltaDiasHastaCumpleaños = (fechaNacimiento: string | Date) => {
  const hoy = dayjs();
  let cumpleanos = dayjs(fechaNacimiento).year(hoy.year());

  // Si el cumpleaños ya pasó este año, ajustamos al próximo año
  if (cumpleanos.isBefore(hoy, "day")) {
    cumpleanos = cumpleanos.add(1, "year");
  }

  return cumpleanos.diff(hoy, "day");
};
