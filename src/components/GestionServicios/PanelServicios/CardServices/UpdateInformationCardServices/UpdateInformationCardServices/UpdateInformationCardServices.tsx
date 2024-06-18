import { Button, Input, Modal, Title } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { NAME_INPUTS_VALUES_SERVICES } from "@/components/GestionServicios/FormularioServicios/ArrayOfFormularios/initialValuesArraysFormularios/initialValuesArraysFormularios";
import { ServicioSchema } from "@/components/GestionServicios/FormularioServicios/ArrayOfFormularios/initialValuesArraysFormularios/validationServices";
import { PartialUpdateServices, useUpdateServicio } from "@/services/servicios";
import { Form, Formik } from "formik";
import { FC, useEffect } from "react";
import { TbArrowBackUpDouble } from "react-icons/tb";

type PropsEditInformation = {
  setOpenEdit: () => void;
  // dato de prueba
  costo?: string;
  nombre?: string;
  _id?: string;
};

const UpdateInformationCardServices: FC<PropsEditInformation> = ({
  setOpenEdit,
  costo,
  nombre,
  _id,
}) => {
  const { mutate, isPending, isSuccess } = useUpdateServicio();
  const handledSubmit = (data: PartialUpdateServices) => mutate(data);

  useEffect(() => {
    if (isSuccess) setOpenEdit();
  }, [isSuccess, setOpenEdit]);

  return (
    <>
      <Modal
        className="container flex items-center justify-center shadow-md shadow-blue-100 rounded-2xl border-border_three/10 flex-[0_1_40rem] p-8 bg-white border min-h-[50vh]"
        type="CENTER"
        animate="TOP"
      >
        {isPending ? (
          <LoadingStatic />
        ) : (
          <div className="flex flex-col w-full">
            <div className="flex justify-between w-full mb-4">
              <Title
                label="Editando servicio"
                type="h1"
                className="text-3xl font-robotoSlab_600 title-common pb-[1rem]"
              />
              <Button
                onClick={setOpenEdit}
                type="button"
                btnDefault
                className="flex justify-center items-center gap-3 bg-bg_fourt border-black/50 font-robotoSlab_800 border flex-[0_1_12rem] h-[2.5rem]"
                label="Volver"
              >
                <TbArrowBackUpDouble className="text-2xl" />
              </Button>
            </div>
            <Formik
              initialValues={{
                _id,
                costo,
                nombre,
              }}
              onSubmit={handledSubmit}
              validationSchema={ServicioSchema}
            >
              {({ getFieldProps }) => (
                <Form className="flex flex-col">
                  {NAME_INPUTS_VALUES_SERVICES.map((inputs, indexInputs) => (
                    <div className="mb-4" key={indexInputs}>
                      <Input
                        label={inputs.textPlaceHolder}
                        className="w-full bg-bg_six/10 border-none focus:shadow-md focus:bg-bg_six/20 text-text_primary font-robotoSlab_600 transition focus:border-border_three/50 my-4 pl-3 h-[3rem] rounded-full"
                        labelClassName="text-inputs-gradients"
                        reset
                        fieldProps={getFieldProps}
                        name={`${inputs.name}`}
                      />
                    </div>
                  ))}
                  <Button type="submit" btnStyled="blue" />
                </Form>
              )}
            </Formik>
          </div>
        )}
      </Modal>
    </>
  );
};

export default UpdateInformationCardServices;
