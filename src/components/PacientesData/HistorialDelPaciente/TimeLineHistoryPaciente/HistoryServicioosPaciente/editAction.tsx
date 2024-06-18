import { Modal, Typography } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useGetAllEstados } from "@/services/estado-tratamiento/queries";
import {
  DetallesServicios,
  Estados,
  ID,
} from "@/services/pacientes/types/typesPaciente";
import { ErrorMessage, Form, Formik } from "formik";
import { AnimatePresence } from "framer-motion";
import { Button } from "primereact/button";
import { useState } from "react";
import { BiArrowBack, BiBookReader, BiEdit } from "react-icons/bi";
import { MdOutlineDetails } from "react-icons/md";
import {
  InitialEditAction,
  schemaValidationEstadoTratamiento,
} from "./initialEditAction";
import { useUpdateEstadoTratamientoServicio } from "@/services/pacientes-servicios/tratamiento/mutation";
import { useParams } from "react-router-dom";
const EditAction = (detalles: DetallesServicios) => {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const { data, isLoading } = useGetAllEstados();

  const open = () => setOpenEdit(!openEdit);
  const { id } = useParams<ID>();

  const { mutate, isPending } = useUpdateEstadoTratamientoServicio(
    id ?? "",
    open
  );

  const handledSubmit = (data: InitialEditAction) => mutate(data);

  if (detalles.estado_tratamiento)
    if (
      detalles.estado_tratamiento.estado_tratamiento !== Estados.ENPROCESO &&
      detalles.costo_servicio !== detalles.monto_pagado &&
      detalles.costo_restante !== "0.00"
    )
      return (
        <>
          <Button
            onClick={open}
            type="button"
            tooltipOptions={{ position: "top" }}
            tooltip="Editar"
            className="border-none"
          >
            <BiEdit className="text-2xl" />
          </Button>

          <AnimatePresence>
            {openEdit && (
              <Modal
                onClick={open}
                className="flex-[0_1_50rem] relative p-8 z-[100] bg-default border border-border_four/50 shadow-md rounded-2xl min-h-[20vh]"
                type="CENTER"
                animate="SCALE-CENTER"
              >
                <Button
                  onClick={open}
                  type="button"
                  className=" shadow-md -right-3 bg-default -top-3 border rounded-md absolute"
                  tooltip="Volver"
                  tooltipOptions={{ position: "top" }}
                >
                  <BiArrowBack className="text-3xl" />
                </Button>
                <div className="flex flex-col gap-4 mb-6">
                  <Typography
                    className="text-xl flex justify-center items-center gap-2 text-text_six font-robotoSlab_600"
                    label="Solo puedes modificar el estado del tratamiento"
                  >
                    <MdOutlineDetails />
                  </Typography>
                </div>
                <Formik
                  initialValues={{
                    estado_tratamiento: detalles.estado_tratamiento._id,
                    idDoc: detalles._id,
                  }}
                  onSubmit={handledSubmit}
                  validationSchema={schemaValidationEstadoTratamiento}
                >
                  {({ getFieldProps }) => (
                    <Form>
                      {isLoading ? (
                        <LoadingStatic />
                      ) : (
                        <select
                          className="w-full font-robotoSlab_600 p-4 hover:bg-bg_three/10 rounded-md shadow-md border-none"
                          {...getFieldProps("estado_tratamiento")}
                        >
                          <option value="">Estado del tratamiento</option>
                          {data?.map((estados) => (
                            <option key={estados._id} value={estados._id}>
                              {estados.estado_tratamiento
                                .charAt(0)
                                .toUpperCase() +
                                estados.estado_tratamiento
                                  .slice(1)
                                  .toLowerCase()}
                            </option>
                          ))}
                        </select>
                      )}
                      <ErrorMessage
                        name="estado_tratamiento"
                        component={"p"}
                        className="text-text_five font-robotoSlab_600"
                      />
                      {isPending ? (
                        <LoadingStatic />
                      ) : (
                        <Button
                          type="submit"
                          className="bg-bg_six w-full h-[2.5rem] mt-4 text-default hover:bg-bg_six/50 font-robotoSlab_500 flex items-center justify-center gap-2"
                        >
                          Actualizar
                          <BiBookReader className="text-xl" />
                        </Button>
                      )}
                    </Form>
                  )}
                </Formik>
              </Modal>
            )}
          </AnimatePresence>
        </>
      );
};

export default EditAction;
