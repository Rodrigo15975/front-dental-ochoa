import { FC } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FcNook } from "react-icons/fc";
import CommonTooltip from "../Tooltip/Tooltip";

type PropsOptionsCardUsersMedico = {
  onClick: () => void;
  phone: string;
};
const OptionsCardUserMedico: FC<PropsOptionsCardUsersMedico> = ({
  onClick,
  phone,
}) => {
  const whatsappLink = `https://wa.me/+51${phone}`;
  // Añadir la logica para que vaya al whatssap con telefono de la db
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <CommonTooltip title="WhatsApp" className="h-full">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-4xl hover:scale-125 transition text-green-400 cursor-pointer" />
          </a>
        </CommonTooltip>
        <CommonTooltip title="Información Personal" className="h-full">
          <FcNook
            onClick={onClick}
            className="bg-bg_three/60 hover:bg-bg_three transition hover:scale-125 p-1 rounded-full text-4xl cursor-pointer"
          />
        </CommonTooltip>
      </div>
    </>
  );
};

export default OptionsCardUserMedico;
