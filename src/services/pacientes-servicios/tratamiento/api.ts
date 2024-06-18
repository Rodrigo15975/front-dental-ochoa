import { useMethods } from "@/adapters/methods";
import { Message } from "../types/typesPacienteServicios";
import { InitialServicesExistente } from "@/components/GestionPacientes/PanelListPacientes/ModalAddServicioExistentePaciente/FormServicesExistente/initialValuesExistente";
import { PathServices } from "@/services/pathServices";
import { InitialEditAction } from "@/components/PacientesData/HistorialDelPaciente/TimeLineHistoryPaciente/HistoryServicioosPaciente/initialEditAction";

export const createTratamientoServicio = async (
  data: InitialServicesExistente,
  id: string
) =>
  await useMethods.POST<Message, InitialServicesExistente>(
    `${PathServices.DETALLES_SERVICIOS}/tratamiento/${id}`,
    data,
    { withCredentials: true }
  );

export const updateTratamientoServicio = async (data: InitialEditAction) =>
  await useMethods.PATCH<InitialEditAction>(
    `${PathServices.DETALLES_SERVICIOS}/tratamiento`,
    data,
    { withCredentials: true }
  );
