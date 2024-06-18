import { useGetId, useGetProfile } from "@/services/profile/queries";
import storeOptionProfile from "@/store/storeUpdateProfile/storeOptionProfile";
import storeUpdatePhotoProfile from "@/store/storeUpdateProfile/storeUpdatePhotoProfile";
import storeUpdateProfile from "@/store/storeUpdateProfile/storeUpdateProfile";
import { Button } from "../Common";
import ModalEdtiServicesMedico from "../Common/CardUsersMedicos/OptionsProfileCardUsersMedicos/ModalEdtiServicesMedico";
import { useState } from "react";

const OptionsDashboard = () => {
  const [openModalEditServicesMedico, setOpenModalEditServicesMedico] =
    useState<boolean>(false);
  const { setOpenOption } = storeOptionProfile();
  const { setOpenUpdateProfile } = storeUpdateProfile();
  const { setOpenUpdatePhotoProfile } = storeUpdatePhotoProfile();
  const openOptions = () => {
    setOpenOption();
  };
  // Crear otro
  const openUpdateProfile = () => {
    // cerramos el options
    setOpenOption();
    // Abrimos la opcion par actualizar
    setOpenUpdateProfile();
  };

  // Flata crear funcionalidad para el photo de perfil actualizar
  const openUpdatePhotoProfile = () => {
    setOpenOption();
    setOpenUpdatePhotoProfile();
  };

  // De medicos, si el user es el que inicio de medico
  const { data } = useGetId();
  const dataProfile = useGetProfile(data?.id ?? "", data?.role);
  const openEditServices = () =>
    setOpenModalEditServicesMedico(!openModalEditServicesMedico);

  return (
    <>
      <ModalEdtiServicesMedico
        apellidos={dataProfile.data?.apellidos ?? ""}
        id={data?.id ?? ""}
        name={dataProfile.data?.name ?? ""}
        open={openModalEditServicesMedico}
        openModal={openEditServices}
        servicios={dataProfile.data?.servicios ?? []}
      />
      <div className="flex w-full text-text_primary/80 justify-evenly flex-col">
        <div className="flex gap-4 flex-col flex-[0_1_10rem]">
          <Button
            className="h-[3rem] font-robotoSlab_600 text-text_primary bg-default/80 hover:bg-white"
            type="button"
            onClick={openUpdateProfile}
            label="Actualizar información"
            btnDefault
          />
          <Button
            className="h-[3rem] font-robotoSlab_600 text-text_primary bg-default/80 hover:bg-white"
            type="button"
            onClick={openUpdatePhotoProfile}
            label="Editar foto de perfil"
            btnDefault
          />

          {data?.role === "MEDICO" && (
            <Button
              className="h-[3rem] font-robotoSlab_600 text-text_primary bg-default/80 hover:bg-white"
              type="button"
              onClick={openEditServices}
              label="Modificar servicios"
              btnDefault
            />
          )}
        </div>
        <div className="flex justify-end flex-col flex-[0_1_5rem]">
          <Button
            onClick={openOptions}
            className="h-[3rem] bg-white"
            type="button"
            label="Volver"
            btnDefault
          />
        </div>
      </div>
    </>
  );
};

export default OptionsDashboard;
