import { Button } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useUpdatePaciente } from "@/services/pacientes/mutation";
import { useGetFindOnePaciente } from "@/services/pacientes/queries";
import {
  ID,
  PartialUpdatePaciente,
} from "@/services/pacientes/types/typesPaciente";
import { Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import FormDataPacientes from "./Form";
import RelacionFamiliar from "./RelacionFamiliar";
import { validationSchemaPacienteUpdate } from "./validationUpdate";

const AppForm = () => {
  const { id } = useParams<ID>();

  const { data } = useGetFindOnePaciente(id ?? "");
  const { mutate, isPending } = useUpdatePaciente(id ?? "");
  const initalDatos: PartialUpdatePaciente = {
    dni: data?.dni ?? "",
    name: data?.name ?? "",
    apellidos: data?.apellidos ?? "",
    fuenteCaptacion: data?.fuenteCaptacion ?? "",
    fechaNacimiento: data?.fechaNacimiento ?? "",
    email: data?.email ?? "",
    celular: data?.celular ?? "",
    genero: data?.genero ?? "",
    ciudad: data?.ciudad ?? "",
    departamento: data?.departamento ?? "",
    direccion: data?.direccion ?? "",
    distrito: data?.distrito ?? "",
  };
  const hanledSubmit = (data: PartialUpdatePaciente) => mutate(data);

  return (
    <>
      <Formik
        initialValues={{ ...initalDatos }}
        onSubmit={hanledSubmit}
        validationSchema={validationSchemaPacienteUpdate}
      >
        {({ getFieldProps }) => (
          <Form className="flex flex-col gap-6 justify-between max-lg:flex-wrap">
            <FormDataPacientes fieldProps={getFieldProps} />
            <div className="px-4">
              {isPending ? (
                <LoadingStatic />
              ) : (
                <Button
                  type="submit"
                  btnStyled
                  label="Actualizar cambios"
                  className="font-robotoSlab_500 bg-bg_six text-default h-[3rem] hover:bg-bg_six/50 transition mt-5"
                />
              )}
            </div>
          </Form>
        )}
      </Formik>
      {!data?.mayorEdad && <RelacionFamiliar />}
    </>
  );
};

export default AppForm;
