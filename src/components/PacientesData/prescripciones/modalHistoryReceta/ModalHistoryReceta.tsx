import { Button, Modal, Table } from "@/components/Common";
import { useGetFindOnePaciente } from "@/services/pacientes/queries";
import { ID } from "@/services/pacientes/types/typesPaciente";
import storePrescripcion from "@/store/storeDataPacientes/prescripciones/storePrescripcion";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import columnHistoryReceta from "./column/columnHistoryReceta";
import { capitalize } from "@/utils";
import { InputText } from "primereact/inputtext";

const ModalHistoryReceta = () => {
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const { openModalHistoryReceta, setOpenModalHistoryReceta } =
    storePrescripcion();

  const { columnsHistoryReceta } = columnHistoryReceta();
  const { id } = useParams<ID>();
  const { data } = useGetFindOnePaciente(id ?? "");

  useEffect(() => {
    if (openModalHistoryReceta) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [openModalHistoryReceta]);

  const nameUpper = capitalize(data?.name ?? "");
  const apellidosUpper = capitalize(data?.apellidos ?? "");

  const header = () => {
    return (
      <>
        <div className="flex flex-col gap-4 items-center justify-between">
          <div className="flex text-text_six text-xl w-full justify-between">
            <p>Historial de recetas</p>
            <p>
              Paciente: {nameUpper} {apellidosUpper}
            </p>
          </div>
          <div className="flex justify-between w-full">
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
                onClick={setOpenModalHistoryReceta}
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
        {openModalHistoryReceta && (
          <Modal
            className="flex-[0_1_80rem] min-h-[80vh] rounded-md border-border_four/80 container bg-default border shadow-md "
            type="CENTER"
            animate="LEFT"
          >
            <div className="max-h-[90vh] p-4 overflow-y-auto">
              <Table
                headerClassName="bg-header-table text-default"
                className="w-full min-h-[70vh] bg-default"
                columnsConfig={columnsHistoryReceta}
                data={data?.recetaMedica}
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

export default ModalHistoryReceta;
