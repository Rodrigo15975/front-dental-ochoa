import { Button, Title } from "@/components/Common";
import { storeGestionMedicos } from "@/store";
import { storeUsuarioAndMedico } from "@/store/storeSearchs/usuarios/storeUsuariosAndMedic";
import { Input } from "antd";
import { BiBookAlt } from "react-icons/bi";
import { FaSearchengin } from "react-icons/fa";
import { MdBlockFlipped } from "react-icons/md";

const InputSearchMedicos = () => {
  const { setSearch } = storeUsuarioAndMedico();
  const { setOpenListInactiveMedicos } = storeGestionMedicos();
  return (
    <div className="flex gap-3  items-end flex-wrap">
      <Title
        label="Lista de Médicos"
        type="h1"
        className="flex items-center gap-4 title-common font-robotoSlab_700 text-3xl w-full"
      >
        <BiBookAlt className="text-text_secondary" />
      </Title>
      <div className="flex w-full gap-2">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          className="font-robotoSlab border-border_primary rounded-full shadow-md h-[2.5rem]"
          suffix={<FaSearchengin className="text-xl text-text_secondary" />}
          placeholder="Buscar médico..."
        />
        <Button
          onClick={setOpenListInactiveMedicos}
          type="button"
          className="flex-[0_1_16rem] flex items-center justify-center gap-1 font-robotoSlab_600 bg-bg_nine text-text_primary/50 hover:text-text_primary hover:bg-bg_nine/50"
          btnDefault
          label="Inactivos"
        >
          <MdBlockFlipped className="text-xl" />
        </Button>
      </div>
    </div>
  );
};

export default InputSearchMedicos;
