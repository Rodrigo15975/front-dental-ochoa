import { Button, ButtonIcon, Modal, Tooltip } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useDeleteArchivos } from "@/services/archivos/mutation";
import { HistoryArchive, ID } from "@/services/pacientes/types/typesPaciente";
import { capitalize } from "@/utils";
import { Image } from "antd";
import { AnimatePresence } from "framer-motion";
import { Card } from "primereact/card";
import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { useParams } from "react-router-dom";

const CardHistory = (item: HistoryArchive) => {
  const { descripcion, fechaCreacion, horaCreacion, url_archivo, medico, _id } =
    item;
  const { id } = useParams<ID>();
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const nameUpper = capitalize(medico.name ?? "");
  const apellidoUpper = capitalize(medico.apellidos ?? "");
  const openModalDelete = () => setOpenDelete(!openDelete);
  const { mutate, isPending } = useDeleteArchivos(id ?? "");
  const deleteArchivo = () => mutate(_id ?? "");

  if (item) {
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
              <p>
                Medico:{" "}
                <span>
                  {nameUpper} {apellidoUpper}
                </span>{" "}
              </p>
              <div className="flex w-full justify-end">
                <Tooltip
                  onClick={openModalDelete}
                  position="leftBottom"
                  title="Eliminar Archivo"
                >
                  <ButtonIcon className="h-[3rem] w-[3rem] hover:shadow-md hover:bg-bg_seven/40 transition cursor-pointer flex items-center rounded-md shadow-sm justify-center  bg-bg_seven/80">
                    <BiTrash className="text-2xl text-text_primary" />
                  </ButtonIcon>
                </Tooltip>
              </div>
            </div>
          }
        >
          <div className="w-full flex justify-center gap-3 h-full">
            <div className="flex-[0_1_20rem] h-[20rem]">
              <Image
                style={{ borderRadius: "1rem", objectFit: "cover" }}
                src={url_archivo}
                width={"100%"}
                loading="lazy"
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
              {isPending ? (
                <LoadingStatic />
              ) : (
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
                      onClick={deleteArchivo}
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
              )}
            </Modal>
          )}
        </AnimatePresence>
      </>
    );
  }
};

export default CardHistory;
