import { Button, Input, Modal } from "@/components/Common";
import storeGestionCitas from "@/store/storeGestionCitas/storeGestionCitas";
import { Form, Formik } from "formik";
import { AnimatePresence } from "framer-motion";
import { BiArrowBack, BiHourglass } from "react-icons/bi";
import { inputsHorario } from "../horarios";
import { useCreateHorario } from "@/services/horario/mutation";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { CreateHorario } from "@/services/horario/types/typesHorario";
import { useGetHorario } from "@/services/horario/queries";

const ModalConfigurationHours = () => {
  const { openConfiguration, setOpenConfiguration } = storeGestionCitas();
  const horario = useGetHorario();
  const { mutate, isPending } = useCreateHorario(horario.data?._id ?? "");
  const hanledSubmit = (data: CreateHorario) => mutate(data);
  return (
    <>
      <AnimatePresence>
        {openConfiguration && (
          <Modal
            onClick={setOpenConfiguration}
            className="flex-[0_1_60rem] flex-col p-8 container justify-start flex min-h-[40vh] border border-border_three/20 shadow-md rounded-md bg-default"
            type="CENTER"
            animate="LEFT"
          >
            <Formik
              initialValues={{
                inicio: "07:00:00",
                final: "23:00:00",
              }}
              onSubmit={hanledSubmit}
            >
              {({ getFieldProps }) => (
                <Form className="relative">
                  <Button
                    type="button"
                    className="absolute flex hover:bg-bg_three/80 transition items-center justify-center w-[3rem] h-[3rem]  border bg-bg_three/50 rounded-md -top-[4rem] -right-[3rem]"
                    onClick={setOpenConfiguration}
                  >
                    <BiArrowBack className=" text-2xl" />
                  </Button>
                  <div className="w-full border-b pb-4 flex gap-2 items-center my-4 text-text_primary text-xl">
                    <p className="text-2xl">Configuración de horario</p>
                    <BiHourglass className="text-xl" />
                  </div>
                  <div className="flex gap-2">
                    {inputsHorario.map((input, index) => (
                      <Input
                        fieldProps={getFieldProps}
                        key={index}
                        name={input.name}
                        className="w-full border-none shadow  rounded-md "
                        as={input.as}
                        reset
                        type={input.type}
                        AsComPonente={input.Component}
                      />
                    ))}
                  </div>
                  <div className="min-h-[30vh] flex items-end justify-end">
                    {isPending ? (
                      <div className="w-full flex justify-center">
                        <LoadingStatic />
                      </div>
                    ) : (
                      <Button
                        type="submit"
                        label="Guardar horario"
                        className="bg-bg_six hover:bg-bg_six/50 transition rounded-md text-default font-robotoSlab_500 shadow-md flex-[0_1_100%] h-[3rem]"
                      />
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalConfigurationHours;
