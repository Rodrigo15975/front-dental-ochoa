import { Image } from "antd";
import { Card } from "primereact/card";
// import { useState } from "react";
// import { AiTwotoneDelete } from "react-icons/ai";
// import { MdLibraryBooks, MdModeEdit } from "react-icons/md";
// import { toast } from "react-toastify";

// import { ButtonIcon, Tooltip } from "@/components/Common";
// import ArchiveDelete from "./delete/ArchiveDelete";
// import ArchiveDetail from "./details/ArchiveDetail";
// import ArchiveEdit from "./edit/ArchiveEdit";
import { HistoryArchive } from "@/services/pacientes/types/typesPaciente";

const CardHistory = (item: HistoryArchive) => {
  const { descripcion, fechaCreacion, horaCreacion, url_archivo } = item;
  // const [openEdit, setOpenEdit] = useState(false);
  // const [openDetail, setOpenDetail] = useState(false);

  // const openModalEdit = () => setOpenEdit(!openEdit);
  // const openModalDetail = () => setOpenDetail(!openDetail);

  // const openModalDelete = () =>
  //   toast.warning(<ArchiveDelete />, {
  //     position: "top-right",
  //     closeOnClick: true,
  //     icon: false,
  //     toastId: "delete-toast",
  //     autoClose: 5000,
  //   });

  return (
    <>
      <Card
        className="font-robotoSlab my-4 y hover:shadow-2xl transition border-border_three/30 shadow-md border"
        subTitle={
          <div className="text-text_primary/90">
            <p className="font-robotoSlab_600 text-[1.1rem]">
              Fecha de Creación
            </p>
            <span className="mr-2">{fechaCreacion}</span>
            <span className="mr-2">{horaCreacion}</span>
            <p>Descripción: {descripcion}</p>
          </div>
        }
      >
        <div className="w-full flex justify-center gap-3 h-full">
          {/* <div className="flex flex-col rounded-md border shadow-md w-full gap-4 p-4 flex-[0_1_10rem] justify-center">
            <Tooltip position="leftBottom" title="Editar información">
              <ButtonIcon
                onClick={openModalEdit}
                className="h-[2.7rem] cursor-pointer flex items-center rounded-md shadow-sm justify-center bg-bg_three/80"
              >
                <MdModeEdit className="text-xl text-text_primary" />
              </ButtonIcon>
            </Tooltip>

            <Tooltip position="leftBottom" title="Detalles">
              <ButtonIcon
                onClick={openModalDetail}
                className="h-[2.7rem] cursor-pointer flex items-center rounded-md shadow-sm justify-center bg-bg_six "
              >
                <MdLibraryBooks className="text-xl text-default" />
              </ButtonIcon>
            </Tooltip>

            <Tooltip position="leftBottom" title="Eliminar información">
              <ButtonIcon
                onClick={openModalDelete}
                className="h-[2.7rem] cursor-pointer flex items-center rounded-md shadow-sm justify-center  bg-bg_seven/80"
              >
                <AiTwotoneDelete className="text-xl text-text_primary" />
              </ButtonIcon>
            </Tooltip>
          </div> */}
          <div className="flex-[0_1_20rem] h-[20rem]">
            <Image
              style={{ borderRadius: "1rem", objectFit: "cover" }}
              src={url_archivo}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      </Card>
      {/* <ArchiveDetail onClick={openModalDetail} state={openDetail} />
      <ArchiveEdit onClick={openModalEdit} state={openEdit} /> */}
    </>
  );
};

export default CardHistory;
