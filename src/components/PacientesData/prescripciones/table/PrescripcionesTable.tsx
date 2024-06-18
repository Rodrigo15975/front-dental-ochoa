import ContainerData from "@/components/Common/ContainerData/ContainerData";
import OptionsPrescripciones from "../modalHistoryPrescripcion/OptionsPrescripciones";
import ModalHistoryPrescripcion from "../modalHistoryPrescripcion/ModalHistoryPrescripcion";
import ModalHistoryReceta from "../modalHistoryReceta/ModalHistoryReceta";

const PrescripcionesTable = () => {
  return (
    <>
      <ContainerData className="flex flex-col">
        <OptionsPrescripciones />
      </ContainerData>
      {/* Modal  history prescripcion*/}
      <ModalHistoryPrescripcion />
      {/* Modal  history receta*/}
      <ModalHistoryReceta />
    </>
  );
};

export default PrescripcionesTable;
