import { Button, Title } from "@/components/Common";
import storeGestionServicios from "@/store/storeGestionServicios/storeGestionServicios";
import { FcServices } from "react-icons/fc";
import { TbArrowBackUpDouble } from "react-icons/tb";

type Props = {
  title: string;
};

const TitlteArrayFormulario = ({ title }: Props) => {
  const { setOpenFormGestionServicios } = storeGestionServicios();

  const backPanelServicios = () => setOpenFormGestionServicios();

  return (
    <div className="flex justify-between w-full mb-4">
      <Title
        label={title}
        type="h1"
        className="flex gap-2 items-center text-3xl font-robotoSlab_600 title-common pb-[1rem]"
      >
        <FcServices className="text-text_eight" />
      </Title>
      <Button
        onClick={backPanelServicios}
        type="button"
        btnDefault
        className="flex justify-center items-center gap-3 bg-bg_fourt border-black/50 font-robotoSlab_800 border flex-[0_1_12rem] h-[2.5rem]"
        label="Volver"
      >
        <TbArrowBackUpDouble className="text-2xl" />
      </Button>
    </div>
  );
};

export default TitlteArrayFormulario;
