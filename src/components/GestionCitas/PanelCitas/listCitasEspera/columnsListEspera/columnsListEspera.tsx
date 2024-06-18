import { Button } from "@/components/Common";
import {
  useUpdateStatusCitaConfirmada,
  useUpdateStatusCitaListaSala,
} from "@/services/citas/mutation";
import { useGetAllCitas } from "@/services/citas/queries";
import { GetAllCitas, STATUSCITA } from "@/services/citas/types/typesCitas";
import storeGestionCitas from "@/store/storeGestionCitas/storeGestionCitas";

import { ColumnProps } from "primereact/column";
import { toast } from "react-toastify";

const ColumnsListEspera = () => {
  const { data } = useGetAllCitas();
  const appointInSala = data?.filter(
    (appointments) => appointments.estado.estado === STATUSCITA.EN_SALA
  );
  const { mutate } = useUpdateStatusCitaListaSala();
  const { setOpenModalListEspera } = storeGestionCitas();

  const citaConfirmada = useUpdateStatusCitaConfirmada(setOpenModalListEspera);

  const Orden = (rowIndex: number) => {
    return <>{rowIndex + 1}</>;
  };

  const changeSala = (id: string) => {
    if (appointInSala?.length === 1)
      return toast.warning("El paciente está en sala ", { toastId: "in sala" });

    mutate({ idDocStado: id });
  };

  const changeCalendarioCita = (id: string) =>
    citaConfirmada.mutate({ idDocStado: id });

  const acciones = (data: GetAllCitas) => {
    return (
      <div className="flex items-center gap-3">
        <Button
          type="button"
          className="bg-rose-500/80 p-2 hover:bg-rose-500/50 transition h-[2.5rem] rounded-md shadow-md font-robotoSlab_600"
          onClick={() => changeSala(data._id)}
        >
          Cambiar a sala
        </Button>
        <Button
          type="button"
          onClick={() => changeCalendarioCita(data._id)}
          className="flex items-center font-robotoSlab_600 hover:bg-bg_three/40 rounded-md shadow-md justify-center bg-bg_three/80 h-[2.5rem] w-full"
        >
          Volver al calendario
        </Button>
      </div>
    );
  };

  const columns: ColumnProps[] = [
    {
      field: "",
      header: "Orden",
      body: (_: GetAllCitas, { rowIndex }) => Orden(rowIndex),
    },
    {
      field: "paciente.name",
      header: "Paciente",
    },
    {
      field: "paciente.apellidos",
      header: "Apellido",
    },
    {
      field: "observacion",
      header: "Observacion/Comentarios",
    },
    {
      field: "medico.name",
      header: "Medico",
    },
    {
      field: "medico.apellidos",
      header: "Apellido",
    },
    {
      field: "",
      header: "Acciones",
      body: (data: GetAllCitas) => acciones(data),
    },
  ];
  return {
    columns,
  };
};

export default ColumnsListEspera;
