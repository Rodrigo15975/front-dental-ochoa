import { FC } from "react";
import DeleteInformationCardServices from "./DeleteInformationCardServices/DeleteInformationCardServices";
import UpdateInformationCardServices from "./UpdateInformationCardServices/UpdateInformationCardServices";
import { AnimatePresence } from "framer-motion";

type PropsInformationCardServices = {
  openDelete: boolean;
  openEdit: boolean;
  setOpenDelete: () => void;
  setOpenEdit: () => void;
  costo?: string;
  nombre?: string;
  _id?: string;
};

const AppTemplateUpdateInformationCardServices: FC<
  PropsInformationCardServices
> = ({
  openDelete,
  openEdit,
  costo,
  setOpenDelete,
  setOpenEdit,
  nombre,
  _id,
}) => {
  return (
    <>
      <AnimatePresence>
        {openDelete && (
          <DeleteInformationCardServices
            setOpenDelete={setOpenDelete}
            costo={costo ?? ""}
            nombre={nombre ?? ""}
            _id={_id ?? ""}
          />
        )}
        {openEdit && (
          <UpdateInformationCardServices
            setOpenEdit={setOpenEdit}
            costo={costo ?? ""}
            nombre={nombre ?? ""}
            _id={_id ?? ""}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default AppTemplateUpdateInformationCardServices;
