import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { validationSchemaUsuario } from "@/components/GestionUsuarios/PanelUsuarios/FormularioUsuarios/inputsUsuarios/validationSchemaUsuario";
import { useUpdateProfile } from "@/services/profile/mutation";
import { useGetId, useGetProfile } from "@/services/profile/queries";
import { PartialUser } from "@/services/profile/types/typeProfile";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ProfileInformationDashboard from "./ProfileInformationDashboard";
import TitleProfileUpdateDashboard from "./TitleProfileUpdateDashboard";

const FormProfileUpdateDashboard = () => {
  const userId = useGetId();
  const { data } = useGetProfile(userId.data?.id ?? "", userId.data?.role);
  const updateProfile = useUpdateProfile(userId.data?.id);
  const handledSubmit = (dataUpdate: PartialUser) =>
    updateProfile.mutate(dataUpdate);
  const notification = () =>
    toast.success("La información del DNI, no puede ser actualizada", {
      toastId: "notification",
      autoClose: 6000,
      position: "bottom-center",
    });

  useEffect(() => {
    notification();
  }, []);

  if (updateProfile.isPending) return <LoadingStatic />;

  return (
    <div className="flex-[0_1_50rem] justify-center flex flex-wrap min-h-[80vh]">
      <div className="w-full px-4 flex items-center rounded-md justify-between bg-bg_five">
        <TitleProfileUpdateDashboard />
      </div>
      <div className="w-full min-h-[70vh]">
        <Formik
          initialValues={{
            ...data,
          }}
          onSubmit={handledSubmit}
          validationSchema={validationSchemaUsuario}
        >
          {({ getFieldProps }) => (
            <Form>
              <ProfileInformationDashboard fieldProps={getFieldProps} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormProfileUpdateDashboard;
