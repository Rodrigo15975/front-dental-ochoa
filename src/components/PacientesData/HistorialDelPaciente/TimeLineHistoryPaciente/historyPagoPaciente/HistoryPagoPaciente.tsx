import { Button, Modal, Table } from "@/components/Common";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { useGetFindOnePaciente } from "@/services/pacientes/queries";
import { useParams } from "react-router-dom";
import { ID } from "@/services/pacientes/types/typesPaciente";
import columnsHistoryPaciente from "./columnsHistoryPagoPaciente/columnsHistoryPacien";
import { AnimatePresence } from "framer-motion";
import { capitalize } from "@/utils";
import { MdOutlinePayments } from "react-icons/md";
import { BiRefresh } from "react-icons/bi";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";

type Props = {
  state: boolean;
  setState: () => void;
};

const HistoryPagoPaciente = ({ setState, state }: Props) => {
  const { id } = useParams<ID>();
  const { data } = useGetFindOnePaciente(id ?? "");
  const [search, setSearch] = useState<string>("");
  const { columns } = columnsHistoryPaciente();

  const nameUpper = capitalize(data?.name ?? "");
  const apellidosUpper = capitalize(data?.apellidos ?? "");

  const refreshTable = () => setSearch("");

  const header = () => (
    <>
      <div className="flex gap-4 border-b pb-4 flex-col items-center justify-between">
        <div className="flex text-text_six text-xl w-full justify-between">
          <p className="flex items-center gap-2">
            Historial de pagos
            <MdOutlinePayments className="text-3xl" />
          </p>
          <p>
            Paciente: {nameUpper} {apellidosUpper}
          </p>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-2">
            <InputText
              type="search"
              className="rounded-lg shadow-md"
              tooltip="Busqueda"
              placeholder="Search..."
              onInput={(e) => {
                const target = e.target as HTMLInputElement;
                setSearch(target.value.toLocaleLowerCase());
              }}
            />
            <CommonTooltip className="cursor-pointer" title="Recargar tabla">
              <BiRefresh className="text-4xl" onClick={refreshTable} />
            </CommonTooltip>
          </div>
          <div>
            <Button
              label="Volver"
              className="bg-bg_six p-3 max-w-[20rem] rounded-lg text-default"
              type="button"
              onClick={setState}
            />
          </div>
        </div>
      </div>
    </>
  );

  useEffect(() => {
    if (state) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [state]);

  return (
    <>
      <AnimatePresence>
        {state && (
          <Modal
            className="flex-[0_1_80rem] min-h-[80vh] rounded-md border-border_four/80 container bg-default border shadow-md "
            type="CENTER"
            animate="LEFT"
          >
            <div className="max-h-[90vh] p-4 overflow-y-auto">
              <Table
                headerClassName="bg-header-table text-default"
                className="w-full"
                columnsConfig={columns}
                data={data?.detallesServicios ?? []}
                globalFilter={search}
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

export default HistoryPagoPaciente;
