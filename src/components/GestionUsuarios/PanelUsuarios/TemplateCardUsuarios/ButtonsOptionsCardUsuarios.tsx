import { Button, Modal } from "@/components/Common";
import ModalUpdateProfileUsuarios from "@/components/Common/CardUsersMedicos/OptionsProfileCardUsersMedicos/ModalUpdateProfileUsuarios";
import { capitalize } from "@/utils";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

type Props = {
  openModalOptions: () => void;
  name: string;
  apellidos: string;
  id: string;
  role: string;
};

const ButtonsOptionsCardUsuarios = ({
  apellidos,
  id,
  name,
  openModalOptions,
  role,
}: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const nameCapitalize = capitalize(name);
  const apellidoCapitalize = capitalize(apellidos);
  //abrir de update profile photo
  const open = () => setOpenModal(!openModal);

  return (
    <div className="flex flex-col justify-between w-full">
      <div className="w-full flex flex-col gap-4">
        <Button
          className="h-[3rem] text-text_primary/50 hover:text-text_primary bg-white/50 font-robotoSlab_600 hover:bg-white"
          btnDefault
          label="Editar foto de perfil"
          type="button"
          onClick={open}
        />

        <Button
          className="h-[3rem]  font-robotoSlab_600 bg-white w-full"
          btnDefault
          type="button"
          label="Volver"
          onClick={openModalOptions}
        />
      </div>

      <AnimatePresence>
        {openModal && (
          <Modal
            className="flex-[0_1_40rem] shadow relative rounded-3xl p-8 flex flex-col justify-between min-h-[30vh] border bg-default"
            type="CENTER"
            animate="LEFT"
          >
            <ModalUpdateProfileUsuarios
              apellidos={apellidoCapitalize}
              name={nameCapitalize}
              id={id}
              queryKey="usuarios"
              role={role}
              open={open}
            />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ButtonsOptionsCardUsuarios;
