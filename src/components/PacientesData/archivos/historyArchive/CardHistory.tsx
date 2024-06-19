import { Button, Modal } from "@/components/Common";
import { HistoryArchive } from "@/services/pacientes/types/typesPaciente";
import { Image } from "antd";
import { AnimatePresence } from "framer-motion";
import { Card } from "primereact/card";
import { useState } from "react";

const CardHistory = (item: HistoryArchive) => {
  const { descripcion, fechaCreacion, horaCreacion, url_archivo } = item;

  const [openDelete, setOpenDelete] = useState<boolean>(false);

  const openModalDelete = () => setOpenDelete(!openDelete);

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
            {/* <div className="flex w-full justify-end">
              <Tooltip position="leftBottom" title="Eliminar información">
                <ButtonIcon
                  onClick={openModalDelete}
                  className="h-[3rem] w-[3rem] hover:shadow-md hover:bg-bg_seven/40 transition cursor-pointer flex items-center rounded-md shadow-sm justify-center  bg-bg_seven/80"
                >
                  <BiTrash className="text-2xl text-text_primary" />
                </ButtonIcon>
              </Tooltip>
            </div> */}
          </div>
        }
      >
        <div className="w-full flex justify-center gap-3 h-full">
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
      <AnimatePresence>
        {openDelete && (
          <Modal
            className="flex-[0_1_30rem] max items-center bg-default  p-6 min-h-[38vh] border shadow rounded-xl"
            type="CENTER"
            animate="OPACITY"
          >
            <div className="flex-[0_1_15rem] flex flex-col h-[15rem]">
              <Image
                style={{ borderRadius: "1rem", objectFit: "cover" }}
                src={url_archivo}
                width={"100%"}
                height={"100%"}
              />
              <div className="flex w-full mt-4 p-2 justify-center gap-3 ">
                <Button
                  type="button"
                  label="Eliminar"
                  className="bg-bg_seven h-[2rem] text-default flex-[0_1_10rem]"
                  btnDefault
                />
                <Button
                  onClick={openModalDelete}
                  type="button"
                  label="Cancelar"
                  className="bg-bg_six h-[2rem] text-default flex-[0_1_10rem]"
                  btnDefault
                />
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default CardHistory;
