import { Button, Input, Typography } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import SelectMulti from "@/components/Common/MultiSelect/MultiSelect";
import { useAsignarServicioForMedico } from "@/services/medicos/mutation";
import { useGetServicios } from "@/services/servicios";
import { storeGestionServicios } from "@/store";
import { ErrorMessage, Form, Formik } from "formik";
import { useState } from "react";
import { MdMedicalServices } from "react-icons/md";
import {
  InitialAsignarServicio,
  initialAsignarServicios,
} from "./types/typesAsginarServicios";
import { validationSchemaAsignarServicio } from "./validationAsignarServicios";

const FormAsignarServicios = () => {
  const { setOpenFormAsignarServicios } = storeGestionServicios();
  const { mutate, isPending } = useAsignarServicioForMedico();

  const { data } = useGetServicios();

  const [selectedServices, setSelectedServices] = useState<
    InitialAsignarServicio | undefined
  >();

  const handledSubmit = (data: InitialAsignarServicio) => (
    mutate(data), setSelectedServices(undefined)
  );

  return (
    <>
      <div className="p-8">
        {isPending ? (
          <LoadingStatic />
        ) : (
          <>
            <Typography
              className="bg-bg_three/10 flex items-center gap-2 text-text_primary/80 p-3 text-2xl font-robotoSlab_500 border shadow-sm rounded"
              label="Asignando Servicios"
            >
              <MdMedicalServices />
            </Typography>
            <div>
              <Formik
                initialValues={initialAsignarServicios}
                onSubmit={handledSubmit}
                validationSchema={validationSchemaAsignarServicio}
              >
                {({ getFieldProps, setFieldValue }) => (
                  <Form className="flex flex-col justify-between max-lg:flex-wrap">
                    <div className="my-4">
                      <Input
                        reset
                        fieldProps={getFieldProps}
                        name="dni"
                        labelClassName="font-robotoSlab_600 text-inputs-gradients font-robotoSlab_500"
                        className="w-full border border-border_three/15 text-text_primary/90 shadow-md font-robotoSlab_600 p-2 h-[2.5rem] mt-[0.5rem] focus:outline-1 transition-all rounded-md focus:outline-border_three outline"
                        label="DNI del Médico"
                      />
                    </div>
                    <SelectMulti
                      titleOption="Seleccione los servicios"
                      optionsLabel={data}
                      valueOptions={selectedServices}
                      getFieldProps={getFieldProps}
                      onChange={(value) => {
                        setSelectedServices(value);
                        setFieldValue("servicios", value);
                      }}
                      name="nombre"
                    />
                    <ErrorMessage
                      name="servicios"
                      className="text-text_seven"
                      component={"p"}
                    />
                    <div className="flex flex-col gap-4 w-full">
                      <Button
                        type="submit"
                        btnDefault
                        className=" mt-4 bg-bg_six h-[3rem] hover:bg-bg_six/50 flex items-center justify-center gap-2 font-robotoSlab_500 text-default"
                        label="Registrar"
                      />
                      <Button
                        type="button"
                        onClick={setOpenFormAsignarServicios}
                        className=" w-full rounded-full bg-bg_seven/50 h-[3rem] hover:bg-bg_seven flex items-center justify-center gap-2 font-robotoSlab_500 text-text_primary"
                        label="Cancelar"
                      />
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FormAsignarServicios;
