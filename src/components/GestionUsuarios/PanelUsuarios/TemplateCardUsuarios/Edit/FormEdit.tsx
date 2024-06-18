import { Typography } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import ProfileInformationDashboard from "@/components/Dashboard/updateProfile/ProfileInformationDashboard";
import { useUpdateUsuario } from "@/services/usuarios/mutation";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import { validationSchemaUsuario } from "../../FormularioUsuarios/inputsUsuarios/validationSchemaUsuario";
import { DataCardUsuario } from "../types/typesTemplateCardUsuarios";

type Props = {
  usuarios: DataCardUsuario;
  onClick: () => void;
};

const FormEdit = ({ onClick, usuarios }: Props) => {
  const handledSubmit = (data: DataCardUsuario) => mutate(data);
  const { mutate, isSuccess, isPending } = useUpdateUsuario();

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
            label={`Role: ${usuarios.role ?? ""}`}
          />
        </div>
        <div className="w-full min-h-[70vh]">
          <Formik
            initialValues={{ ...usuarios }}
            validationSchema={validationSchemaUsuario}
            onSubmit={handledSubmit}
          >
            {({ getFieldProps }) => (
              <Form className="flex flex-col justify-center relative">
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

export default FormEdit;
