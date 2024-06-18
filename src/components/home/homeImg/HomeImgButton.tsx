import { Button } from "@/components/Common";
import storeUpdatePhotoHome from "@/store/storeUpdatePhotoHome/storeUpdatePhotoHome";
import { MdModeEdit } from "react-icons/md";
import HomeUpdateImg from "./HomeUpdateImg";
import { AnimatePresence } from "framer-motion";
import { useGetEmpresa } from "@/services/configuracion";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";

const HomeUpdateButton = () => {
  const { openUpdate, setOpenUpdate } = storeUpdatePhotoHome();

  const { data } = useGetEmpresa();
  const openUpdatePhoto = () => setOpenUpdate();

  return (
    <>
      <Button
        onClick={openUpdatePhoto}
        className={`absolute w-[4rem] h-[4rem] rounded-full right-3 top-3 flex items-center justify-center z-10  ${
          data?.isRegisterConsultorio ? "bg-bg_six" : "bg-bg_six/50"
        }  `}
        type="button"
      >
        <CommonTooltip
          className={`h-full w-full flex items-center justify-center  ${
            !data?.isRegisterConsultorio && "cursor-no-drop"
          } `}
          title={`${
            data?.isRegisterConsultorio
              ? "Actualiza la portada"
              : "Registra tu consultorio y actualiza la foto de portada"
          }`}
        >
          <MdModeEdit className="text-3xl hover: text-white" />
        </CommonTooltip>
      </Button>
      <AnimatePresence>
        {data?.isRegisterConsultorio && openUpdate && <HomeUpdateImg />}
      </AnimatePresence>
    </>
  );
};

export default HomeUpdateButton;
