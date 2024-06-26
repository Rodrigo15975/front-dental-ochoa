import { Modal, Table } from "@/components/Common";
import { useGetFindOnePaciente } from "@/services/pacientes/queries";
import { ID } from "@/services/pacientes/types/typesPaciente";
import { AnimatePresence } from "framer-motion";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { BiDetail } from "react-icons/bi";
import { useParams } from "react-router-dom";
import ColumnsListCitas from "./columns/columnsCitas";

const HistoryCitas = () => {
  const { id } = useParams<ID>();
  const { data, isLoading } = useGetFindOnePaciente(id ?? "");
  const { columns } = ColumnsListCitas();
  const [openModalHistory, setOpenModalHistory] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const openModal = () => setOpenModalHistory(!openModalHistory);
  const header = (
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
      <Button
        onClick={openModal}
        className="flex-[0_1_15rem] flex items-center justify-center text-default shadow-md h-[3rem] bg-bg_six"
      >
        Volver
      </Button>
    </div>
  );

  useEffect(() => {
    openModalHistory
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");

    return () => {
      document.body.style.overflow = "";
    };
  }, [openModalHistory]);

  return (
    <>
      <Button
        tooltipOptions={{
          position: "top",
        }}
        onClick={openModal}
        tooltip="Ver Historial"
        className="bg-bg_six/50 flex p-4 shadow-md hover:bg-bg_six   gap-2 items-center w-full rounded-md  text-default text-xl"
      >
        Detalles
        <BiDetail className="text-2xl" />
      </Button>
      <AnimatePresence>
        {openModalHistory && (
          <Modal
            className="bg-default container border-border_four/50 shadow-md border flex-[0_1_80rem] min-h-[80vh]"
            type="CENTER"
            animate="OPACITY"
          >
            <div className="max-h-[80vh] overflow-y-auto">
              <Table
                columnsConfig={columns}
                data={data?.citas ?? []}
                row={8}
                headerClassName="bg-header-table text-default"
                className="h-full"
                loading={isLoading}
                globalFilter={globalFilter}
                header={header}
              />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default HistoryCitas;
