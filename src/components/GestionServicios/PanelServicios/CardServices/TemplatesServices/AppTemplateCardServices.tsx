import { varianItemAnimate } from "@/components/Common";
import { m } from "framer-motion";
import { FC, useState } from "react";

import {
  TemplateButtonsActionsServices,
  TemplateImageCarServices,
  TemplateInformationCardServices,
} from ".";

import { PropsServicesData } from "../Types/typeCardServices";
import AppTemplateUpdateInformationCardServices from "../UpdateInformationCardServices/AppTemplateUpdateInformationCardServices";

const TemplateCardServices: FC<PropsServicesData> = ({ data }) => {
  const { nombre, costo, _id } = data;

  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const deleteServices = () => setOpenDelete(!openDelete);
  const editServices = () => setOpenEdit(!openEdit);

  return (
    <>
      <m.div
        variants={varianItemAnimate}
        className="flex justify-between bg-template-gradient flex-[0_1_100%] py-4 min-h-[6.8rem] hover:bg-bg_three/10  transition rounded-md shadow-md border p-2 border-border_three/50"
      >
        <div className="flex justify-evenly items-center flex-[0_1_16rem]">
          <TemplateImageCarServices />
          <TemplateInformationCardServices costo={costo} nombre={nombre} />
        </div>
        <div className="flex justify-evenly items-center flex-[0_1_10rem]">
          <TemplateButtonsActionsServices
            openDelete={deleteServices}
            openEdit={editServices}
          />
        </div>
      </m.div>
      <AppTemplateUpdateInformationCardServices
        setOpenDelete={deleteServices}
        setOpenEdit={editServices}
        openDelete={openDelete}
        _id={_id}
        nombre={nombre}
        openEdit={openEdit}
        costo={costo}
      />
    </>
  );
};

export default TemplateCardServices;
