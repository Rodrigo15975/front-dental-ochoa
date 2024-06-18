import { capitalize } from "@/utils";
import { FC } from "react";

type PropsInformationCardServices = {
  nombre?: string;
  costo?: string;
};

const TemplateInformationCardServices: FC<PropsInformationCardServices> = ({
  costo,
  nombre,
}) => {
  const capitalizeOne = capitalize(nombre ?? "");
  return (
    <>
      <div className="flex-[0_1_12rem]">
        <p className="text-[1rem] mb-1 text-text_six font-robotoSlab_600">
          Servicio: {capitalizeOne}
        </p>
        <p className="text-[1rem] text-text_six/80 font-robotoSlab_400 ">
          Precio: S/ <span className="font-robotoSlab_600 text-text_six">{costo}</span>
        </p>
      </div>
    </>
  );
};

export default TemplateInformationCardServices;
