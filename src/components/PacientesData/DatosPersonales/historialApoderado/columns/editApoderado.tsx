import { Input, Modal, Typography } from "@/components/Common";
import { ApoderadoEdit } from "@/components/GestionPacientes/AddPacientes/FormMenor/inputsPacienteMenor";
import { Form, Formik } from "formik";
import { AnimatePresence } from "framer-motion";
import { Button } from "primereact/button";
import { useState } from "react";
import { BiArrowBack, BiBookReader, BiEdit } from "react-icons/bi";
import {
  inputsApoderadoEdit,
  validationEditApoderadoSchema,
} from "./inputsEditApoderado";
import { useUpdateDataApoderado } from "@/services/apoderado/mutation";
import { useParams } from "react-router-dom";
import { ID } from "@/services/pacientes/types/typesPaciente";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";

const EditApoderado = (apoderado: ApoderadoEdit) => {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const { id } = useParams<ID>();
  const open = () => setOpenEdit(!openEdit);

  const { mutate, isPending } = useUpdateDataApoderado(id ?? "", open);

  const handledSubmit = (data: ApoderadoEdit) => mutate(data);

  return (
    <>
      <Button onClick={open} type="button" tooltip="Editar">
        <BiEdit className="text-2xl text-text_six" />
      </Button>
      <AnimatePresence>
        {openEdit && (
          <Modal
            onClick={open}
            className="flex-[0_1_50rem] relative p-8 z-[100] bg-default border border-border_four/50 shadow-md rounded-2xl min-h-[20vh]"
            type="CENTER"
            animate="SCALE-CENTER"
          >
            <div className="max-h-[80vh] overflow-y-auto">
              <Button
                onClick={open}
                type="button"
                className=" shadow-md -right-3 bg-default -top-3 border rounded-md absolute"
                tooltip="Volver"
                tooltipOptions={{ position: "top" }}
              >
                <BiArrowBack className="text-3xl" />
              </Button>
              <Typography
                className="text-2xl mb-5 text-text_six font-robotoSlab_500"
                label="Actualizando información del apoderado"
              />
              <Formik
                initialValues={{
                  ...apoderado,
                }}
                validationSchema={validationEditApoderadoSchema}
                onSubmit={handledSubmit}
              >
                {({ getFieldProps }) => (
                  <Form>
                    <div className="flex flex-col gap-4">
                      {inputsApoderadoEdit.slice(0, 5).map((input, index) => (
                        <div
                          key={`input-apoderado-${index}`}
                          className="w-full items-start flex flex-col"
                        >
                          <Input
                            label={input.textPlaceHolder}
                            reset
                            labelClassName="font-robotoSlab_800 text-inputs-gradients font-robotoSlab_500"
                            className={
                              " w-full border border-border_three/15 text-text_primary/90 shadow-md font-robotoSlab_600 p-2 h-[2.5rem] mt-[0.5rem] focus:outline-1 transition-all rounded-md focus:outline-border_three outline"
                            }
                            AsComPonente={input.Component}
                            as={input.as}
                            disabled={input.disabled}
                            type={input.type}
                            name={input.name}
                            fieldProps={getFieldProps}
                          />
                        </div>
                      ))}
                      {inputsApoderadoEdit.slice(5, 6).map((input, index) => (
                        <div
                          key={`input-apoderado-${index}`}
                          className="w-full items-start flex flex-col"
                        >
                          <Input
                            label={input.textPlaceHolder}
                            reset
                            labelClassName="font-robotoSlab_800 text-inputs-gradients font-robotoSlab_500"
                            className={
                              " w-full border border-border_three/15 text-text_primary/90 shadow-md font-robotoSlab_600 p-2 h-[2.5rem] mt-[0.5rem] focus:outline-1 transition-all rounded-md focus:outline-border_three outline"
                            }
                            AsComPonente={input.Component}
                            as={input.as}
                            disabled={apoderado.fuenteCaptacion ? true : false}
                            type={input.type}
                            name={input.name}
                            fieldProps={getFieldProps}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-4">
                      {isPending ? (
                        <LoadingStatic />
                      ) : (
                        <Button
                          type="submit"
                          className="flex mt-8 h-[2.5rem] items-center text-white gap-2 justify-center w-full bg-bg_six/80 hover:bg-bg_six/50  "
                        >
                          Actualizar información
                          <BiBookReader className="text-2xl" />
                        </Button>
                      )}
                      <Button
                        type="button"
                        className="flex h-[2.5rem] items-center text-text_primary/80 gap-2 justify-center w-full bg-bg_fourt/50 hover:bg-bg_fourt"
                      >
                        <BiArrowBack className="text-2xl" />
                        Cancelar
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default EditApoderado;
