import { Typography } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useGetServiceDestacado } from "@/services/pacientes-servicios/destacado/querie";
import { capitalize } from "@/utils";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";

const ServicesDestacado = () => {
  const { data, isLoading } = useGetServiceDestacado();

  const nameUpper = capitalize(data?.nombre ?? "");

  return (
    <>
      {isLoading ? (
        <LoadingStatic />
      ) : (
        <div className="w-full">
          <div className="flex bg-bg_list_espera/50 rounded-t-2xl  p-6">
            <Typography
              className="flex gap-2 font-robotoSlab_600 text-2xl items-center"
              label="Servicio destacado"
            >
              <FaRegStar />
              <FaRegStar />
            </Typography>
          </div>

          <div className="w-full">
            <div className="flex text-text_primary/70 justify-center gap-4 min-h-[16rem] flex-col items-center">
              <MdOutlineMedicalServices className="text-5xl" />

              <h5 className="mb-1 text-xl">{nameUpper}</h5>
              <span className="text-xl">Veces pedidas: {data?.count}</span>
              <span className="text-xl">Costo {data?.costo}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesDestacado;
