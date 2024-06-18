import { Button, Modal, Table, Typography } from "@/components/Common";
import { GetAllMedicos } from "@/services/medicos/types/typesMedicos";
import { AnimatePresence } from "framer-motion";
import { ColumnsHistoryAsistenciaMedicos } from "./columns/columnsHistoryAsistenciaMedico";
import { capitalize } from "@/utils";
import Avatar from "antd/es/avatar/avatar";
import { FaUserDoctor } from "react-icons/fa6";
import { IoArrowBackCircle } from "react-icons/io5";

type Props = {
  data: GetAllMedicos;
  state: boolean;
  onClick: () => void;
};
const ModalHistoryMedicosAsistencia = ({ data, state, onClick }: Props) => {
  const { columnsMedicos } = ColumnsHistoryAsistenciaMedicos();
  const header = () => <div></div>;
  const { asistencia, name, apellidos, url_perfil } = data;
  const capitalizeName = capitalize(name);
  const capitalizeApellidos = capitalize(apellidos);
  return (
    <>
      <AnimatePresence>
        {state && (
          <Modal
            className="flex-[0_1_100rem] p-8 container bg-default border rounded-3xl shadow min-h-[85vh]"
            type="CENTER"
            animate="SCALE-CENTER"
            onClick={onClick}
          >
            <div className="max-h-[80vh] overflow-y-auto">
              <div className="w-full flex justify-between px-8 items-center gap-2 bg-bg_three/10 p-3 shadow rounded-2xl  text-2xl font-robotoSlab_500 text-text_eight/80">
                <div className="flex gap-2 items-center">
                  <Typography
                    className="font-robotoSlab_400"
                    label={`Historial de asistencia`}
                  />

                  <Typography
                    className="text-text_primary"
                    label={`Médico: ${capitalizeName} ${capitalizeApellidos}`}
                  />

                  <Avatar
                    className="bg-default border shadow-sm"
                    icon={<FaUserDoctor className="text-text_secondary" />}
                    src={url_perfil}
                    alt="médico"
                  />
                </div>
                <div className="rounded-full  bg-bg_six/50 hover:bg-bg_six/80 transition">
                  <Button
                    onClick={onClick}
                    type="button"
                    className="flex  text-xl p-3 w-full h-full text-default items-center gap-2"
                    label="Volver"
                  >
                    <IoArrowBackCircle />
                  </Button>
                </div>
              </div>
              <Table
                row={10}
                headerClassName="bg-bg_six/50 text-white"
                columnsConfig={columnsMedicos}
                data={asistencia}
                globalFilter=""
                header={header()}
              />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalHistoryMedicosAsistencia;
