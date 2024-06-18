import { Avatar } from "antd";
import { TiUserOutline } from "react-icons/ti";

type Props = {
  url: string | undefined;
};
const ImageCardUsuarios = ({ url }: Props) => {
  return (
    <>
      {/* DARLE ESTILO AL TITLT CARD Y TERMINAR Y LUEG ODAR MAS TAREAS */}
      <figure className="flex shadow-md border border-border_three/50 items-center justify-center flex-[0_1_8.7rem] h-auto rounded-full">
        {/* Va el Icon del medico */}
        <Avatar
          className="h-[8.7rem] w-full"
          alt="Usuario"
          src={url}
          style={{ backgroundColor: "rgba(244, 240, 255, 0.275)" }}
          icon={<TiUserOutline className="text-5xl text-text_six/50" />}
        />
      </figure>
    </>
  );
};

export default ImageCardUsuarios;
