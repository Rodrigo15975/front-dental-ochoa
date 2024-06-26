import { useGetAllPacientes } from "@/services/pacientes/queries";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { FaRegAddressBook } from "react-icons/fa6";

import { Table, Typography } from "../Common";
import ColumnsListRecordatorio from "./columns/columns";

const AppRecordatorio = () => {
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const { data, isLoading } = useGetAllPacientes();
  const clientesMayores = data?.filter((clientes) => clientes.mayorEdad);

  const { columns } = ColumnsListRecordatorio();

  const header = () => {
    return (
      <>
        <Typography
          label="Lista de recordatorios(Mayores de edad)"
          className="text-2xl flex gap-2 items-center text-text_six mb-8"
        >
          <FaRegAddressBook className="text-2xl" />
        </Typography>
        <div className="flex justify-between text-center font-robotoSlab items-center gap-3 ">
          <InputText
            type="search"
            className="rounded-lg shadow-md"
            tooltip="Busqueda"
            placeholder="Search..."
            onInput={(e) => {
              const target = e.target as HTMLInputElement;
              setGlobalFilter(target.value.toLocaleLowerCase());
            }}
          />
        </div>
      </>
    );
  };

  return (
    <div className="w-full flex justify-center flex-col">
      <div className="w-full p-8 flex bg-default mt-2">
        <div className="p-4 shadow-sm border border-border_three/50 w-full rounded-lg container m-auto">
          <Table
            className=" w-full min-h-[80vh]"
            columnsConfig={columns}
            data={clientesMayores ?? []}
            header={header()}
            globalFilter={globalFilter}
            headerClassName="bg-header-table text-default"
            loading={isLoading}
            row={8}
          />
        </div>
      </div>
    </div>
  );
};

export default AppRecordatorio;
