import { Button, Modal, Table } from "@/components/Common";
import { useGetFindOnePaciente } from "@/services/pacientes/queries";
import { ID } from "@/services/pacientes/types/typesPaciente";
import { capitalize } from "@/utils";
import { AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import columnsHistorialClinica from "./columnsHistorialClinica";

type Props = {
  setOpen: () => void;
  open: boolean;
};

const ModalTableHistorialClinica = ({ open, setOpen }: Props) => {
  const { id } = useParams<ID>();

  const { data } = useGetFindOnePaciente(id ?? "");
  const { columns } = columnsHistorialClinica();
  const nameUpper = capitalize(data?.name ?? "");
  const apellidosUpper = capitalize(data?.apellidos ?? "");
  const header = () => (
    <>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex gap-2 text-text_six text-xl w-full justify-between">
            <p>Historial Clinico</p>
            <p className="text-text_primary/50">
              Paciente: {nameUpper} {apellidosUpper}
            </p>
          </div>
        </div>
        <div>
          <Button
            label="Volver"
            className="bg-bg_six p-4 rounded-lg text-default"
            type="button"
            onClick={setOpen}
          />
        </div>
      </div>
    </>
  );

  return (
    <>
      <AnimatePresence>
        {open && (
          <Modal
            className="flex-[0_1_80rem] p-8 bg-default rounded-3xl container min-h-[80vh] border shadow-md border-border_three/50"
            type="CENTER"
            animate="SCALE-CENTER"
          >
            <Table
              columnsConfig={columns}
              data={data?.historialClinico}
              globalFilter=""
              className=""
              header={header()}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalTableHistorialClinica;
