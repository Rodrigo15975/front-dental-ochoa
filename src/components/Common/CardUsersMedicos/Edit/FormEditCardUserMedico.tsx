import ProfileInformationDashboard from "@/components/Dashboard/updateProfile/ProfileInformationDashboard";
import { validationSchemaMedico } from "@/components/GestionMedicos/FormArrayGestionMedicos/ModalFormulariosMedicos/inputsFormularioMedicos/validationFormularioMedicos";
import { useUpdateMedico } from "@/services/medicos/mutation";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import LoadingStatic from "../../Loading/LoadingStatic";
import Typography from "../../Typography/Typography";
import { Users } from "../types/typesCardUsersMedicos";

type Props = {
  medicos: Users;
  onClick: () => void;
};

const FormEditCardUserMedico = ({ medicos, onClick }: Props) => {
  const { mutate, isSuccess, isPending } = useUpdateMedico();
  const handledSubmit = (data: Users) => mutate(data);

  useEffect(() => {
    if (isSuccess) return onClick();
  }, [isSuccess, onClick]);

  if (isPending) return <LoadingStatic />;

  return (
    <>
      <div className="flex-[0_1_50rem] justify-center flex flex-wrap min-h-[80vh]">
        <div className="w-full px-4 flex items-center rounded-md justify-between bg-bg_five">
          <Typography
            className="text-white font-robotoSlab_500 h-[3rem] text-xl flex items-center"
            label="Actualizando Información"
          />

          <Typography
            className="text-default font-robotoSlab_600"
            label={`Role: ${medicos.role}`}
          />
        </div>
        <div className="w-full min-h-[70vh]">
          <Formik
            initialValues={{ ...medicos }}
            validationSchema={validationSchemaMedico}
            onSubmit={handledSubmit}
          >
            {({ getFieldProps }) => (
              <Form className="flex justify-center relative">
                {/* los mismos dashboard de editar profile de ashboard, tienen la misma informacion pro eso lo reutilizo */}
                {/* Estew es del dashboard, los inputs, ya que es la mismo info */}
                <ProfileInformationDashboard fieldProps={getFieldProps} />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default FormEditCardUserMedico;
