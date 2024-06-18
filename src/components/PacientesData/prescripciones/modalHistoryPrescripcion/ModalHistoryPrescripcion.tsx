import { Button, Modal, Table } from "@/components/Common";
import storePrescripcion from "@/store/storeDataPacientes/prescripciones/storePrescripcion";
import { AnimatePresence } from "framer-motion";
import columnPrescriones from "../table/column/columnPrescriones";
import { useParams } from "react-router-dom";
import { ID } from "@/services/pacientes/types/typesPaciente";
import { useGetFindOnePaciente } from "@/services/pacientes/queries";
import { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { capitalize } from "@/utils";

const ModalHistoryPrescripcion = () => {
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const { openModalNewPrescripcion, setOpenModalNewPrescripcion } =
    storePrescripcion();
  const { columnsPrescripciones } = columnPrescriones();

  const { id } = useParams<ID>();
  const { data } = useGetFindOnePaciente(id ?? "");

  useEffect(() => {
    if (openModalNewPrescripcion) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [openModalNewPrescripcion]);

  const nameUpper = capitalize(data?.name ?? "");
  const apellidosUpper = capitalize(data?.apellidos ?? "");

  const header = () => {
    return (
      <>
        <div className="flex gap-4 flex-col items-center justify-between">
          <div className="flex text-text_six text-xl w-full justify-between">
            <p>Historial de recetas</p>
            <p>
              Paciente: {nameUpper} {apellidosUpper}
            </p>
          </div>
          <div className="flex w-full justify-between">
            <div>
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
            <div>
              <Button
                label="Volver"
                className="bg-bg_six p-4 rounded-lg text-default"
                type="button"
                onClick={setOpenModalNewPrescripcion}
              />
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <AnimatePresence>
        {openModalNewPrescripcion && (
          <Modal
            className="flex-[0_1_80rem] min-h-[80vh] rounded-md border-border_four/80 container bg-default border shadow-md "
            type="CENTER"
            animate="LEFT"
          >
            <div className="max-h-[90vh] p-4 overflow-y-auto">
              <Table
                headerClassName="bg-header-table text-default"
                className="w-full min-h-[70vh] bg-default"
                columnsConfig={columnsPrescripciones}
                data={data?.prescripciones}
                globalFilter={globalFilter}
                row={8}
                header={header()}
              />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalHistoryPrescripcion;
