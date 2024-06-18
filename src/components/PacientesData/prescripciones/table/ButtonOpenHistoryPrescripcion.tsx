import { Button } from "@/components/Common";
import storePrescripcion from "@/store/storeDataPacientes/prescripciones/storePrescripcion";
import { BiBookAlt } from "react-icons/bi";

const ButtonNewPrescripcion = () => {
  const { setOpenModalNewPrescripcion } = storePrescripcion();
  return (
    <>
      <div className="flex-[0_1_10rem] min-h-[2.5rem]">
        <Button
          onClick={setOpenModalNewPrescripcion}
          type="button"
          btnStyled
          label="Historial"
          className="w-full bg-bg_three h-full font-robotoSlab_400 transition hover:bg-bg_three/50"
        >
          <BiBookAlt />
        </Button>
      </div>
    </>
  );
};

export default ButtonNewPrescripcion;
