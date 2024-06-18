import {
  ButtonsActionsCardUsersMedicos,
  InformationCardUsersMedicos,
  OptionsCardUserMedico,
  RoleTitleCardUserMedico,
  varianItemAnimate,
} from "@/components/Common";
import { m } from "framer-motion";
import { useState } from "react";
import AppOptionsProfileCardUsuarios from "./AppOptionsProfileCardUsuarios";
import DeleteCardUsersUsuarios from "./Delete/DeleteCardUsuarios";
import FormEditCardUsuarios from "./Edit/FormEditCardUsuarios";
import ImageCardUsuarios from "./ImageCardUsuarios";
import { DataCardUsuario } from "./types/typesTemplateCardUsuarios";

type Props = {
  usuarios: DataCardUsuario;
};

const TemplateCardUsuarios = ({ usuarios }: Props) => {
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const { role, name, dni, _id, apellidos, url_perfil, celular } = usuarios;

  const openModalOptions = () => setOpenOptions(!openOptions);
  const openModalEdit = () => setOpenEdit(!openEdit);
  const openModalDelete = () => setOpenDelete(!openDelete);

  return (
    <>
      <m.div
        variants={varianItemAnimate}
        className="flex bg-card-users-medico hover:shadow-2xl flex-wrap place-content-between place-items-center p-4 flex-[0_1_18.875rem] min-h-[10rem] border-border_primary/50  rounded-xl bg-white shadow-md hover:border-border_three/50 transition border"
      >
        <div className="flex w-full  mb-4 min-h-[3rem] justify-between items-center ">
          {/* mismo componentes en ambos carsd usuarios y medicos */}
          <RoleTitleCardUserMedico role={role} />
          <OptionsCardUserMedico phone={celular} onClick={openModalOptions} />
        </div>
        <div className="flex min-h-[18rem] justify-between flex-col w-full">
          <div className="flex items-center justify-center">
            {/* igual aca */}
            <ImageCardUsuarios url={url_perfil} />
          </div>
          <div className="flex border-b justify-center py-2 items-center w-full flex-col gap-2">
            {/* mimso componenten de medicos y usuarios */}
            <InformationCardUsersMedicos name={name} dni={dni} />
          </div>
          <div className="flex w-full justify-center gap-4">
            {/* mimso componenten de medicos y usuarios */}
            <ButtonsActionsCardUsersMedicos
              _id={_id}
              onClickDelete={openModalDelete}
              onClickEdit={openModalEdit}
            />
          </div>
        </div>
      </m.div>
      {/* options buttons */}
      <AppOptionsProfileCardUsuarios
        role={role}
        id={_id ?? ""}
        onClick={openModalOptions}
        state={openOptions}
        name={name}
        apellidos={apellidos}
      />
      {/* Modal delete */}
      <DeleteCardUsersUsuarios
        _id={_id}
        name={name}
        dni={dni}
        state={openDelete}
        apellidos={apellidos}
        onClick={openModalDelete}
      />
      {/* Modal Edit */}
      <FormEditCardUsuarios
        usuarios={usuarios}
        state={openEdit}
        onClick={openModalEdit}
      />
    </>
  );
};

export default TemplateCardUsuarios;
