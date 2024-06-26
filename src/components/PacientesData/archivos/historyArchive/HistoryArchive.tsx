import { Modal, Table, Typography } from "@/components/Common";
import { useGetFindOnePaciente } from "@/services/pacientes/queries";
import { ID } from "@/services/pacientes/types/typesPaciente";
import { capitalize } from "@/utils";
import { AnimatePresence } from "framer-motion";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { RiFolderHistoryLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import ColumnsHistoryArchive from "./columns/ColumnsArchive";

const HistoryArchive = () => {
  const { id } = useParams<ID>();
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const { columns } = ColumnsHistoryArchive();
  const { data } = useGetFindOnePaciente(id ?? "");
  const [openHistory, setOpenHistory] = useState<boolean>(false);

  const nameUpper = capitalize(data?.name ?? "");
  const apellidosUpper = capitalize(data?.apellidos ?? "");

  const open = () => setOpenHistory(!openHistory);

  useEffect(() => {
    if (openHistory) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [openHistory]);

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
                onClick={open}
              />
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="max-h-[80vh] p-8  border mt-8 shadow-md border-border_three/20 rounded-md overflow-y-auto">
        <div className="flex  justify-between bg-default  w-full">
          <Typography
            className="text-2xl font-robotoSlab_600 flex justify-center items-center gap-2 text-text_secondary"
            label="Historial de Archivos"
          >
            <RiFolderHistoryLine />
          </Typography>
          <Button
            onClick={open}
            className="text-text_primary gap-2  text-xl shadow-md flex items-center justify-center bg-bg_three/50 hover:bg-bg_three flex-[0_1_10rem] h-[3rem]"
            tooltipOptions={{ position: "top" }}
            tooltip="Historial de archivos"
          >
            <RiFolderHistoryLine />
            Detalles
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {openHistory && (
          <Modal
            className="flex-[0_1_80rem] p-8 bg-default rounded-3xl container min-h-[80vh] border shadow-md border-border_three/50"
            type="CENTER"
            animate="OPACITY"
          >
            <div className="max-h-[90vh] p-4 overflow-y-auto">
              <Table
                headerClassName="bg-header-table text-default"
                className="w-full min-h-[70vh] bg-default"
                columnsConfig={columns}
                data={data?.archivos}
                globalFilter={globalFilter}
                row={6}
                header={header()}
              />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default HistoryArchive;
