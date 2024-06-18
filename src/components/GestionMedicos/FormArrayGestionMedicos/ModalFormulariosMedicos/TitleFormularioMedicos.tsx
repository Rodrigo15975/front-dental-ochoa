import { Title } from "@/components/Common";
import ButtonVolverFormularioMedicos from "./ButtonVolverMedicos";

const TitleFormularioMedicos = () => {
  return (
    <div className="flex w-full justify-between mb-4">
      <Title label="Nuevo Médico" type="h1" className="text-3xl title-common font-robotoSlab_600" />
      <ButtonVolverFormularioMedicos />
    </div>
  );
};

export default TitleFormularioMedicos;
