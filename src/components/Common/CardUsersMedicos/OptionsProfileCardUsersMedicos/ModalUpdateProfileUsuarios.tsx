import { useUpdatePerfilUsuarios } from "@/services/profile/mutation";
import { useEffect, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Button from "../../Button/Button";
import UploadPhotos from "../../UploadPhotos/UploadPhotos";
import { BiUpload } from "react-icons/bi";
import LoadingStatic from "../../Loading/LoadingStatic";

type Props = {
  open: () => void;
  id: string;
  role: string;
  name: string;
  queryKey: string;
  apellidos: string;
};

function ModalUpdateProfileUsuarios({
  open,
  id,
  role,
  apellidos,
  queryKey,
  name,
}: Props) {
  const [file, setFile] = useState<FormData | undefined>();
  const { mutate, isPending, isSuccess } = useUpdatePerfilUsuarios(queryKey);

  const changeFile = (files: FormData | undefined) => setFile(files);
  const submitHandledFile = () => mutate({ id, file, role });

  useEffect(() => {
    if (isSuccess) open();
  }, [isSuccess, open]);

  if (isPending) return <LoadingStatic />;
  return (
    <>
      <div className="flex relative container flex-[0_1_100%] gap-3 justify-center">
        <div className="flex flex-col items-center">
          <p className="w-full text-center text-text_primary font-robotoSlab_500 p-2 rounded-md shadow-md bg-bg_primary">
            Actualizando foto de Perfil
          </p>
          <p className="text-text_primary font-robotoSlab_600 text-xl mt-8">
            {role}:{" "}
            <span className="text-text_primary font-robotoSlab_600">
              {name}
            </span>
            <span className="text-text_primary font-robotoSlab_600">
              {" "}
              {apellidos}
            </span>
          </p>
          <UploadPhotos name="perfil" onSelect={changeFile} />
          {file && (
            <Button
              type="button"
              btnDefault
              className="w-full h-[3rem] hover:bg-bg_six/50 transition flex items-center gap-2 justify-center text-default font-robotoSlab_500 bg-bg_six"
              onClick={submitHandledFile}
            >
              <BiUpload />
              Subir imagen
            </Button>
          )}
        </div>

        <Button
          type="button"
          className="h-[3rem] absolute -top-10 -right-10  rounded-full flex items-center justify-center bg-bg_three text-text_primary font-robotoSlab_500 w-[3rem]"
          onClick={open}
        >
          <FaLongArrowAltLeft className="text-xl" />
        </Button>
      </div>
    </>
  );
}

export default ModalUpdateProfileUsuarios;
