import { storeGestionServicios } from "@/store";
import { FieldArray, Form, Formik } from "formik";
import InputsFormServicesPaciente from "./InputsFormServicesPaciente";
import InputsFormServicesPacienteMenor from "./InputsFormServicesPacienteMenor";
import RemoveNewServicesPaciente from "./RemoveNewServicesPaciente";
import {
  InitialValuesNewServicesPacientes,
  initialPushNewServices,
  initialValuesNewServicesPacientes,
} from "./inputsNewServices/inputsNewServices";
import {
  initialValuesMayorSchema,
  initialValuesMenorSchema,
} from "./validationNewServices";
import { useCreateServicioPaciente } from "@/services/pacientes-servicios/mutation";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useEffect } from "react";
import { toast } from "react-toastify";

const FormNewServicesPaciente = () => {
  const { mayorEdad, idPaciente } = storeGestionServicios();

  const { mutate, isPending } = useCreateServicioPaciente(
    mayorEdad,
    idPaciente
  );
  const handledSubmit = (data: InitialValuesNewServicesPacientes) =>
    mutate(data);

  const notification = () =>
    toast.success("Son máximo 3 servicios", {
      position: "top-center",
      toastId: "select",
      autoClose: 3000,
    });
  useEffect(() => {
    notification();
  }, []);

  return (
    <>
      {isPending ? (
        <div className="flex justify-center items-center">
          <LoadingStatic />
        </div>
      ) : (
        <Formik
          initialValues={initialValuesNewServicesPacientes}
          onSubmit={handledSubmit}
          validationSchema={
            mayorEdad ? initialValuesMayorSchema : initialValuesMenorSchema
          }
        >
          {({ getFieldProps }) => (
            <Form>
              <FieldArray name="detalles_servicio">
                {({ push, remove }) => (
                  <div className="flex gap-4 flex-col mt-4">
                    {/* Esto se va renderizar si es menor de edad, con la condicional de la db, por ahora haz el de mayor */}
                    {!mayorEdad && (
                      <InputsFormServicesPacienteMenor
                        fieldProps={getFieldProps}
                      />
                    )}

                    <div className="w-full  py-4 gap-4 justify-between flex">
                      <div className="flex-[0_1_80rem] border rounded-md shadow-md">
                        <InputsFormServicesPaciente
                          remove={remove}
                          fieldProps={getFieldProps}
                        />
                      </div>
                      <RemoveNewServicesPaciente
                        push={() => push(initialPushNewServices)}
                      />
                    </div>
                  </div>
                )}
              </FieldArray>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};

export default FormNewServicesPaciente;
