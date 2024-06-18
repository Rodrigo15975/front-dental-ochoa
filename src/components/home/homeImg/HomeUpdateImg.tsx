import { Button, Modal } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import UploadPhotos from "@/components/Common/UploadPhotos/UploadPhotos";
import { useGetEmpresa } from "@/services/configuracion";
import { useUploadPortada } from "@/services/configuracion/fileUpload/mutation";
import { storeUpdatePhotoHome } from "@/store";
import { storeFile } from "@/store/storeFile/storeFile";
import { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";

const HomeUpdateImg = () => {
  const { setFile, file } = storeFile();
  const { openUpdate, setOpenUpdate } = storeUpdatePhotoHome();
  const { mutate, isPending } = useUploadPortada();
  const { data } = useGetEmpresa();

  const handledSubmitFile = () => mutate({ file, _id: data?._id });

  useEffect(() => {
    if (!openUpdate) setFile(undefined);
  }, [openUpdate, setFile]);

  return (
    <>
      <Modal
        className="flex-[0_1_30rem] flex-col items-start relative p-[1rem] shadow-sm border-border_primary border rounded-lg bg-white min-h-[50vh] flex justify-between"
        type="CENTER"
      >
        <Button
          className="absolute -top-4 z-10 -right-2 flex items-center justify-center bg-bg_six text-white border rounded-full h-[3rem] w-[3rem]"
          type="button"
          onClick={setOpenUpdate}
        >
          <BiArrowBack className="text-3xl" />
        </Button>
        {isPending ? (
          <div className="w-full h-full flex items-center justify-center">
            <LoadingStatic />
          </div>
        ) : (
          <>
            <UploadPhotos name="portada" onSelect={(file) => setFile(file)} />
            <Button
              onClick={handledSubmitFile}
              disabled={file ? false : true}
              type="button"
              label="Enviar"
              className="w-full bg-bg_six  h-[3rem] rounded-full  text-default font-robotoSlab_700"
            />
          </>
        )}
      </Modal>
    </>
  );
};

export default HomeUpdateImg;
