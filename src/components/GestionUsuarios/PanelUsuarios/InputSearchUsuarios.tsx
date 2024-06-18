import { Title } from "@/components/Common";
import { storeUsuarioAndMedico } from "@/store/storeSearchs/usuarios/storeUsuariosAndMedic";
import { Input } from "antd";
import { BiBookAlt } from "react-icons/bi";
import { FaSearchengin } from "react-icons/fa";

const InputSearchUsuarios = () => {
  const { setSearchByUsuarios } = storeUsuarioAndMedico();

  return (
    <>
      <div className="flex gap-3  flex-wrap">
        <Title
          label="Lista de Usuarios"
          type="h1"
          className="flex items-center gap-4 title-common font-robotoSlab_700 text-3xl w-full"
        >
          <BiBookAlt className="text-text_secondary" />
        </Title>
        <Input
          onChange={(e) => setSearchByUsuarios(e.target.value)}
          className="font-robotoSlab border-border_primary rounded-full shadow-md h-[2.5rem]"
          suffix={<FaSearchengin className="text-xl text-text_secondary" />}
          placeholder="Buscar usuario..."
        />
      </div>
    </>
  );
};

export default InputSearchUsuarios;
