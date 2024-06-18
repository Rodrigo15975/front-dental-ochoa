import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import {
  useCreateEtiquetas,
  useDeleteEtiquetas,
} from "@/services/etiquetas/mutation";
import { useGetAllEtiquetas } from "@/services/etiquetas/queries";
import {
  CreateEtiquetas,
  GetAllEtiquetas,
} from "@/services/etiquetas/types/typesEtiquetas";
import { useGetFindOnePaciente } from "@/services/pacientes/queries";
import { ID } from "@/services/pacientes/types/typesPaciente";
import storeNotasEtiquetasAlergias from "@/store/storeNotasEtiquetasAlergias/storeNotasEtiquetasAlergias";
import { ErrorMessage, Form, Formik } from "formik";
import { AnimatePresence } from "framer-motion";
import { Tag } from "primereact/tag";
import { useState } from "react";
import { BiArrowBack, BiEdit, BiTagAlt } from "react-icons/bi";
import { CiShoppingTag } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { Button, ButtonIcon, Modal } from "../../Common";
import SelectMulti from "../../Common/MultiSelect/MultiSelect";
import { validationSchemaEtiquetas } from "./validationEtiqueta";
import { GrClose } from "react-icons/gr";

const Etiquetas = () => {
  // id paciente
  const { id } = useParams<ID>();
  const pacienteData = useGetFindOnePaciente(id ?? "");
  const { data } = useGetAllEtiquetas();

  const { openEtiquetas, setOpenEtiquetas } = storeNotasEtiquetasAlergias();

  const [selectedTags, setSelectedTags] = useState<
    GetAllEtiquetas[] | undefined
  >();

  const { mutate, isPending } = useCreateEtiquetas(id ?? "");
  const hanledSubmit = (data: CreateEtiquetas) => {
    mutate(data);
    setSelectedTags([]);
  };

  const deleteEtiqueta = useDeleteEtiquetas(id ?? "");
  const deleteEtiquetas = (id: string) => deleteEtiqueta.mutate(id);

  return (
    <>
      <div className="flex-[0_1_30rem] transition">
        <div className="flex items-center  justify-between">
          <p className="pb-2 text-text_primary text-[1.1rem] font-robotoSlab_500 flex items-center  justify-between gap-1 ">
            Etiquetas
            <CiShoppingTag className="text-2xl" />
          </p>
          <ButtonIcon
            onClick={setOpenEtiquetas}
            className="text-2xl rounded-full p-1 cursor-pointer"
          >
            <BiEdit className="bg-bg_three/50 rounded-lg shadow  hover:bg-bg_three/20 transition" />
          </ButtonIcon>
        </div>
        <div className="flex gap-2 p-2 flex-[0_1_18rem] min-h-[8rem] shadow-md rounded-md border bg-bg_six/10">
          {pacienteData.data?.etiquetas?.map((tags) => (
            <Tag
              key={tags._id}
              style={{
                backgroundColor: `${tags.bgColor}`,
              }}
              className={`flex relative shadow-md text-text_primary/80 font-robotoSlab_800 flex-[0_1_6rem] hover:scale-110 transition-all h-[2rem]`}
              value={tags.etiqueta}
            >
              <ButtonIcon
                onClick={() => deleteEtiquetas(tags._id)}
                className="absolute cursor-pointer -top-2 p-1 text-text_primary bg-default shadow rounded-full right-0 "
              >
                <GrClose />
              </ButtonIcon>
            </Tag>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {openEtiquetas && (
          <Modal
            className="flex-[0_1_30rem] relative shadow-md p-4 border rounded-2xl bg-default"
            type="CENTER"
            animate="SCALE-CENTER"
          >
            <ButtonIcon
              onClick={setOpenEtiquetas}
              className="absolute hover:scale-110 transition -top-4 cursor-pointer -right-4 text-3xl rounded-xl bg-bg_primary text-default"
            >
              <BiArrowBack />
            </ButtonIcon>
            <Formik
              initialValues={{
                tags: [],
                idPaciente: id,
              }}
              onSubmit={hanledSubmit}
              validationSchema={validationSchemaEtiquetas}
            >
              {({ getFieldProps, setFieldValue }) => (
                <Form>
                  <SelectMulti
                    tooltip="Etiquetas"
                    className="w-full p-4"
                    titleOption="Seleccione las etiquetas"
                    optionsLabel={data}
                    valueOptions={selectedTags}
                    getFieldProps={getFieldProps}
                    onChange={(value) => {
                      setSelectedTags(value);
                      setFieldValue("tags", value);
                    }}
                    name="etiqueta"
                  />
                  <ErrorMessage name="tags" className="text-text_seven/80" />
                  {isPending ? (
                    <LoadingStatic />
                  ) : (
                    <Button
                      type="submit"
                      label="Agregar etiquetas"
                      btnDefault
                      className="w-full bg-bg_nine flex items-center justify-center gap-2 font-robotoSlab_500 p-3 mt-4"
                    >
                      <BiTagAlt />
                    </Button>
                  )}
                </Form>
              )}
            </Formik>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Etiquetas;
