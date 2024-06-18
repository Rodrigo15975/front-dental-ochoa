import { AnimatePresence } from "framer-motion";
import { FC, useState } from "react";
import { Button, Modal, ServiciosMedicos } from "../..";
import ModalEdtiServicesMedico from "./ModalEdtiServicesMedico";
import ModalUpdateProfileUsuarios from "./ModalUpdateProfileUsuarios";
import { capitalize } from "@/utils";

type PropsButtonOptions = {
  openModalOptions: () => void;
  servicios: ServiciosMedicos[];
  name: string;
  apellidos: string;
  id: string;
  role: string;
};

const ButtonsOptionsProfileCardUsersMedicos: FC<PropsButtonOptions> = ({
  openModalOptions,
  apellidos,
  name,
  servicios,
  id,
  role,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const nameCapitalize = capitalize(name);
  const apellidoCapitalize = capitalize(apellidos);
  //abrir de update profile photo
  const open = () => setOpenModal(!openModal);

  // Update servicios medico
  const [openEditServicesMedico, setOpenEditServicesMedico] =
    useState<boolean>(false);
  // Abrir modal de update servicios de medicos
  const openEditService = () =>
    setOpenEditServicesMedico(!openEditServicesMedico);

  return (
    <>
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
            className="h-[3rem] text-text_primary/50 hover:text-text_primary bg-white/50 font-robotoSlab_600 hover:bg-white"
            btnDefault
            label="Modificar Servicios"
            type="button"
            onClick={openEditService}
          />
        </div>

        <Button
          className="h-[3rem]  font-robotoSlab_600 bg-white w-full"
          btnDefault
          type="button"
          label="Volver"
          onClick={openModalOptions}
        />
      </div>
      <ModalEdtiServicesMedico
        apellidos={apellidos}
        id={id}
        name={name}
        open={openEditServicesMedico}
        openModal={openEditService}
        servicios={servicios}
      />

      <AnimatePresence>
        {openModal && (
          <Modal
            className="flex-[0_1_40rem] shadow-md  relative rounded-3xl p-8 flex flex-col justify-between min-h-[40vh] border bg-default"
            type="CENTER"
            animate="LEFT"
          >
            <div className="">
              <ModalUpdateProfileUsuarios
                queryKey="medicos"
                apellidos={apellidoCapitalize}
                name={nameCapitalize}
                id={id}
                role={role}
                open={open}
              />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ButtonsOptionsProfileCardUsersMedicos;
