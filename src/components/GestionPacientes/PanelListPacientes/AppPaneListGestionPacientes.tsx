import { useGetAllPacientes } from "@/services/pacientes/queries";
import { useState } from "react";
import { ContainerMain, Table } from "../../Common";
import AppAddPacientesForm from "../AddPacientes/AppAddPacientesForm";
import HeaderButtonAddPacientes from "../HeaderPanelListPacientes/HeaderButtonAddPacientes";
import HeaderInputSearchPacientes from "../HeaderPanelListPacientes/HeaderInputSearchPacientes";
import HeaderTitlePacientes from "../HeaderPanelListPacientes/HeaderTitlePacientes";
import ColumnListPacientes from "./ColumnListPacientes/ColumnListPacientes";
import AppModalAddNewServicesPacientes from "./ModalAddServicesPacientes/AppModalAddNewServicesPacientes";
import AppModalAddServicioExistentePaciente from "./ModalAddServicioExistentePaciente/AppModalAddServicioExistentePaciente";
import ModalOptionsServicios from "./ModalOptionsServicesPaciente/ModalOptionsServices";

const AppPanelListGestionPacientes = () => {
  const { data, isLoading } = useGetAllPacientes();
  const { columnsPacientes } = ColumnListPacientes();
  const [search, setSearch] = useState<string>("");

  const onChange = (value: string) => setSearch(value);

  const header = () => {
    return (
      <div className="p-4">
        <div className="flex flex-1 pb-4 justify-between">
          <HeaderTitlePacientes />
          <HeaderButtonAddPacientes />
        </div>
        <div className="flex justify-between ">
          <HeaderInputSearchPacientes onClick={onChange} />
        </div>
      </div>
    );
  };

  return (
    <>
      <ContainerMain className="min-h-[90vh] shadow-lg mt-4">
        <AppAddPacientesForm />

        <div className="w-full rounded-2xl">
          <Table
            loading={isLoading}
            columnsConfig={columnsPacientes}
            className="w-full"
            data={data}
            headerClassName="bg-header-table  text-white border-"
            globalFilter={search}
            row={8}
            header={header()}
          />
        </div>
      </ContainerMain>
      <ModalOptionsServicios />
      {/* New Servicio */}
      <AppModalAddNewServicesPacientes />
      {/* Servicio existente */}
      <AppModalAddServicioExistentePaciente />
    </>
  );
};

export default AppPanelListGestionPacientes;
