import { ButtonIcon, Table, Typography } from "@/components/Common";
import { ID } from "@/services/pacientes/types/typesPaciente";
import { useState } from "react";
import { useParams } from "react-router-dom";
import columnsApoderado from "../columns/columnsApoderado";
import { InputText } from "primereact/inputtext";
import { useGetFindOnePaciente } from "@/services/pacientes/queries";
import { FaBookReader } from "react-icons/fa";
import { capitalize } from "@/utils";
import { BiArrowBack } from "react-icons/bi";
import { storeHistoryApoderado } from "@/store/storeHistoryApoderado/storeHistoryApoderado";

const TableApoderado = () => {
  const [search, setSearch] = useState<string>("");
  const { id } = useParams<ID>();
  const { columns } = columnsApoderado();
  const { data, isLoading } = useGetFindOnePaciente(id ?? "");

  const { setOpenHistoryApoderado } = storeHistoryApoderado();
  const upperName = capitalize(data?.name ?? "");
  const upperApellido = capitalize(data?.apellidos ?? "");
  const header = (
    <>
      <div className="mb-4 flex justify-between">
        <Typography className="text-xl" label={`Paciente:`}>
          <span className="text-text_six ml-3">
            {upperName} {upperApellido}
          </span>
        </Typography>
        <ButtonIcon
          onClick={setOpenHistoryApoderado}
          className="text-4xl text-default hover:bg-bg_secondary/50 h-[2.5rem] bg-bg_secondary flex-[0_1_10rem] cursor-pointer rounded-md shadow flex items-center justify-center"
        >
          <BiArrowBack />
        </ButtonIcon>
      </div>
      <div className="flex gap-2 align-items-center justify-between">
        <InputText
          type="search"
          className="rounded-lg shadow-md"
          tooltip="Busqueda de apoderado"
          placeholder="Search..."
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            setSearch(target.value.toLocaleLowerCase());
          }}
        />
        <div className="flex flex-[0_1_20rem]  items-center justify-end gap-4">
          <Typography
            className="text-2xl flex items-center gap-2"
            label={`Historial del apoderado`}
          >
            <FaBookReader />
          </Typography>
        </div>
      </div>
    </>
  );
  return (
    <>
      <Table
        columnsConfig={columns}
        data={data?.apoderado}
        globalFilter={search}
        header={header}
        row={10}
        headerClassName="bg-bg_six text-default"
        loading={isLoading}
      />
    </>
  );
};

export default TableApoderado;
