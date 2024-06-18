import { Button } from "primereact/button";
import { useState } from "react";
import { MdMedicalServices } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import HistoryPagoPaciente from "./historyPagoPaciente/HistoryPagoPaciente";
import HistoryServiciosPaciente from "./HistoryServicioosPaciente/HistoryServiciosPaciente";

const TimeLineHistoryPaciente = () => {
  const [openModalHistoryPago, setOpenModalHistoryPago] =
    useState<boolean>(false);
  const [openModalHistoryServicios, setopenModalHistoryServicios] =
    useState<boolean>(false);

  const openHistoryPago = () => setOpenModalHistoryPago(!openModalHistoryPago);

  const openHistoryServicios = () =>
    setopenModalHistoryServicios(!openModalHistoryServicios);

  return (
    <>
      <div className="w-full container">
        <div className="flex gap-4 flex-col">
          <Button
            className="h-[4rem] shadow-md hover:shadow-none hover:bg-bg_three font-robotoSlab_600 px-4 gap-2 bg-bg_three/50 w-full"
            tooltipOptions={{
              position: "top",
            }}
            onClick={openHistoryPago}
            icon={<MdOutlinePayments className="text-3xl" />}
            tooltip="Historial de pago"
          >
            Historial de pago
          </Button>
          <Button
            onClick={openHistoryServicios}
            className="h-[4rem] shadow-md hover:shadow-none hover:bg-bg_five/50 font-robotoSlab_600 px-4 gap-2 bg-bg_fourt text-text_primary w-full"
            tooltipOptions={{
              position: "top",
            }}
            icon={<MdMedicalServices className="text-3xl" />}
            tooltip="Historial de servicios"
          >
            Historial de servicios
          </Button>
        </div>
      </div>
      {/* Modal pagos*/}
      <HistoryPagoPaciente
        state={openModalHistoryPago}
        setState={openHistoryPago}
      />
      {/*Modal Servicios  */}

      <HistoryServiciosPaciente
        setState={openHistoryServicios}
        state={openModalHistoryServicios}
      />
    </>
  );
};

export default TimeLineHistoryPaciente;
