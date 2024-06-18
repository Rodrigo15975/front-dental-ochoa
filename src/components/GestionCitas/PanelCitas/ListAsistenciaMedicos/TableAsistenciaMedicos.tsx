import { Table, Typography } from "@/components/Common";
import {
  useGetAllMedicos,
  useGetMedicosActivos,
} from "@/services/medicos/queries";
import { registerDateInternational } from "@/utils";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { ColumnsAsistenciaMedicos } from "./columnsAsistenciaMedicos/columnsAsistenciaMedicos";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";

const TableAsistenciaMedicos = () => {
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const { isLoading } = useGetAllMedicos();
  const medicosActivos = useGetMedicosActivos();
  const dateNow = registerDateInternational();

  const { columnsMedicos } = ColumnsAsistenciaMedicos();
  const header = (
    <div className="flex gap-2 align-items-center justify-between">
      <InputText
        type="search"
        className="rounded-lg shadow-md"
        tooltip="Busqueda de médico"
        placeholder="Search..."
        onInput={(e) => {
          const target = e.target as HTMLInputElement;
          setGlobalFilter(target.value.toLocaleLowerCase());
        }}
      />
      <div className="flex flex-[0_1_20rem]  items-center justify-end gap-4">
        <Typography className="text-xl" label={`Fecha: ${dateNow}`} />
      </div>
    </div>
  );

  if (isLoading) return <LoadingStatic />;
  return (
    <>
      <Table
        row={7}
        columnsConfig={columnsMedicos}
        header={header}
        data={medicosActivos}
        globalFilter={globalFilter}
        headerClassName="bg-header-table text-default "
      />
    </>
  );
};

export default TableAsistenciaMedicos;
