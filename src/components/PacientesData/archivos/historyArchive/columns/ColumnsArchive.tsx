import { ButtonIcon, Tooltip } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useDeleteArchivos } from "@/services/archivos/mutation";
import { HistoryArchive, ID } from "@/services/pacientes/types/typesPaciente";
import { Image } from "antd";
import { ColumnProps } from "primereact/column";
import { BiTrash } from "react-icons/bi";
import { useParams } from "react-router-dom";
const ColumnsHistoryArchive = () => {
  const acciones = (data: HistoryArchive) => {
    const { url_archivo } = data;
    return (
      <div className="flex justify-center items-center">
        <div className="flex-[0_1_10rem] border shadow h-[4rem]">
          <Image
            style={{ borderRadius: "1rem", objectFit: "cover", zIndex: 8000 }}
            src={url_archivo}
            width={"100%"}
            loading="lazy"
            height={"100%"}
          />
        </div>
      </div>
    );
  };

  const { id } = useParams<ID>();
  const { mutate, isPending } = useDeleteArchivos(id ?? "");

  const deleteArchive = (data: HistoryArchive) => {
    const { _id } = data;
    const deleteArchivo = () => mutate(_id ?? "");

    return (
      <>
        {isPending ? (
          <LoadingStatic />
        ) : (
          <Tooltip
            onClick={deleteArchivo}
            position="topRight"
            title="Eliminar Archivo"
            className="flex justify-center items-center"
          >
            <ButtonIcon className="h-[3rem] w-[3rem] hover:shadow-md hover:bg-bg_seven/40 transition cursor-pointer flex items-center rounded-md shadow-sm justify-center  bg-bg_seven/80">
              <BiTrash className="text-2xl text-text_primary" />
            </ButtonIcon>
          </Tooltip>
        )}
      </>
    );
  };

  const fecha = (data: HistoryArchive) => {
    return (
      <>
        {data.fechaCreacion} - {data.horaCreacion}
      </>
    );
  };

  const columns: ColumnProps[] = [
    {
      field: "nombre",
      header: "Archivo",
    },
    {
      field: "descripcion",
      header: "Descripcion",
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
      field: "url_archivo",
      header: "Imagen Archivo",
      body: (data: HistoryArchive) => acciones(data),
    },
    {
      header: "Creación",
      body: (data: HistoryArchive) => fecha(data),
      // sortable: true,
      // filter: true,
    },
    {
      header: "Acciones",
      body: (data: HistoryArchive) => deleteArchive(data),
      // sortable: true,
      // filter: true,
    },
  ];
  return {
    columns,
  };
};

export default ColumnsHistoryArchive;
