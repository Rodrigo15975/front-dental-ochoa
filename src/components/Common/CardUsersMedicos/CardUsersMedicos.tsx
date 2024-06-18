import { m } from "framer-motion";
import { FC, useState } from "react";
import {
  AppOptionsProfileCardUsersMedicos,
  ButtonsActionsCardUsersMedicos,
  DeleteCardUsersMedico,
  EditCardUsersMedico,
  ImageCardUserMedicos,
  InformationCardUsersMedicos,
  OptionsCardUserMedico,
  PropsCardUsersMedicos,
  RoleTitleCardUserMedico,
} from ".";
import { varianItemAnimate } from "..";

import "./cssCardUsersMedico.css";

const CardUsersMedicos: FC<PropsCardUsersMedicos> = ({ medicos }) => {
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const { role, name, dni, _id, apellidos, servicios, celular, url_perfil } = medicos;

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
          <RoleTitleCardUserMedico role={role} />
          <OptionsCardUserMedico phone={celular} onClick={openModalOptions} />
        </div>
        <div className="flex min-h-[18rem] justify-between flex-col w-full">
          <div className="flex items-center justify-center">
            <ImageCardUserMedicos url={url_perfil} />
          </div>
          <div className="flex border-b justify-center py-2 items-center w-full flex-col gap-2">
            <InformationCardUsersMedicos name={name} dni={dni} />
          </div>
          <div className="flex w-full justify-center gap-4">
            <ButtonsActionsCardUsersMedicos
              _id={_id}
              onClickDelete={openModalDelete}
              onClickEdit={openModalEdit}
            />
          </div>
        </div>
      </m.div>
      {/* options buttons */}
      <AppOptionsProfileCardUsersMedicos
        role={role}
        id={_id}
        onClick={openModalOptions}
        state={openOptions}
        name={name}
        apellidos={apellidos}
        servicios={servicios}
      />
      {/* Modal delete */}
      <DeleteCardUsersMedico
        _id={_id}
        name={name}
        dni={dni}
        state={openDelete}
        apellidos={apellidos}
        onClick={openModalDelete}
      />
      {/* Modal Edit */}
      <EditCardUsersMedico
        medicos={medicos}
        state={openEdit}
        onClick={openModalEdit}
      />
    </>
  );
};

export default CardUsersMedicos;
