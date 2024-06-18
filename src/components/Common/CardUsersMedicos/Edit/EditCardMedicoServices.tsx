import { ErrorMessage, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import SelectMulti from "../../MultiSelect/MultiSelect";
import {
  ServiciosMedicos,
  UpdateServiciosMedico,
} from "../types/typesCardUsersMedicos";
import Typography from "../../Typography/Typography";
import { capitalize } from "@/utils";
import { FaUserDoctor } from "react-icons/fa6";
import { useUpdateMedicoServices } from "@/services/medicos/mutation";
import LoadingStatic from "../../Loading/LoadingStatic";

type Props = {
  servicios: ServiciosMedicos[];
  name: string;
  apellidos: string;
  id: string;
  onClick: () => void;
};

const EditCardMedicoServices = ({
  servicios,
  apellidos,
  name,
  id,
  onClick,
}: Props) => {
  const [selectServices, setSelectServices] =
    useState<ServiciosMedicos[]>(servicios);

  const { mutate, isSuccess, isPending } = useUpdateMedicoServices();
  const handledSubmit = (data: UpdateServiciosMedico) => mutate(data);

  const apellidosCapitalize = capitalize(apellidos);
  const nameCapitalize = capitalize(name);

  useEffect(() => {
    const closeModalOptions = () => onClick();
    if (isSuccess) closeModalOptions();
  }, [isSuccess, onClick]);

  return (
    <>
      <Formik initialValues={{ servicios, id }} onSubmit={handledSubmit}>
        {({ getFieldProps, setFieldValue }) => (
          <Form className="mt-8">
            <Typography
              className="bg-bg_three/50 text-2xl mb-8 p-2 shadow text-center"
              label={`Editando servicios del médico`}
            />
            <div className="flex items-center gap-2 mb-8 justify-center text-text_primary font-robotoSlab_600">
              <Typography
                className="text-xl "
                label={`Médico: ${nameCapitalize} ${apellidosCapitalize}`}
              />
              <FaUserDoctor />
            </div>
            <SelectMulti
              titleOption="Ningun servicio asignado"
              optionsLabel={selectServices}
              valueOptions={selectServices}
              getFieldProps={getFieldProps}
              onChange={(value) => {
                setSelectServices(value);
                setFieldValue("servicios", value);
              }}
              className="mb-3 w-full"
              name="nombre"
            />
            <ErrorMessage
              name="servicios"
              className="text-text_seven"
              component={"p"}
            />

            {isPending ? (
              <LoadingStatic />
            ) : (
              <Button
                type="submit"
                className={` ${
                  servicios.length === 0 ? "cursor-not-allowed" : ""
                } `}
                disabled={servicios.length === 0}
                btnStyled="blue"
              />
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditCardMedicoServices;
