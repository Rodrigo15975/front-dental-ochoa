import { Button, Loading } from "@/components/Common";
import UploadPhotos from "@/components/Common/UploadPhotos/UploadPhotos";
import { useUpdatePerfilPhoto } from "@/services/profile/mutation";
import { useGetId } from "@/services/profile/queries";
import { storeUpdatePhotoProfile } from "@/store";
import { useState } from "react";
import { BiUpload } from "react-icons/bi";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Photo = () => {
  const [file, setFile] = useState<FormData | undefined>();
  const { data } = useGetId();

  const updatePhoto = useUpdatePerfilPhoto(data?.id);

  const { setOpenUpdatePhotoProfile } = storeUpdatePhotoProfile();

  const changeFile = (files: FormData | undefined) => setFile(files);

  const handleFile = () =>
    updatePhoto.mutate({ file, id: data?.id, role: data?.role });

  if (updatePhoto.isPending) return <Loading />;

  return (
    <>
      <div className="flex relative container flex-[0_1_100%] gap-3 justify-center">
        <div className="flex flex-col items-center">
          <p className="w-full text-center text-text_primary font-robotoSlab_500 p-2 rounded-md shadow-md bg-bg_primary">
            Actualizando Photo de Perfil
          </p>
          <UploadPhotos name="perfil" onSelect={changeFile} />
          {file && (
            <Button
              type="button"
              btnDefault
              className="w-full h-[3rem] hover:bg-bg_six/50 transition flex items-center gap-2 justify-center text-default font-robotoSlab_500 bg-bg_six"
              onClick={handleFile}
            >
              <BiUpload />
              Subir imagen
            </Button>
          )}
        </div>
        <Button
          type="button"
          className="h-[3rem] absolute -top-8 -right-8 rounded-full flex items-center justify-center bg-bg_three text-text_primary font-robotoSlab_500 w-[3rem]"
          onClick={setOpenUpdatePhotoProfile}
        >
          <FaLongArrowAltLeft className="text-xl" />
        </Button>
      </div>
    </>
  );
};

export default Photo;
