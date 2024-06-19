import { Typography } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useGetPacienteDestacado } from "@/services/pacientes-servicios/destacado/querie";
import { CiMoneyBill } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa6";

import { capitalize } from "@/utils";

const PacienteDestacado = () => {
  const { data, isLoading } = useGetPacienteDestacado();
  const nameUpper = capitalize(data?.name ?? "");
  const apellidoUpper = capitalize(data?.apellidos ?? "");
  return (
    <>
      {isLoading ? (
        <LoadingStatic />
      ) : (
        <div className="w-full">
          <div className="flex bg-bg_list_espera/50 rounded-t-2xl p-6">
            <Typography
              className="flex text-text_primary font-robotoSlab_600 gap-2 text-2xl items-center"
              label="Paciente destacado"
            >
              <FaRegStar />
              <FaRegStar />
            </Typography>
          </div>
          <div className="p-6 text-xl flex flex-col gap-4">
            <p className="text-xl text-text_primary/70">Dni: {data?.dni}</p>
            <span className="text-xl text-text_primary/70">
              Nombre: {nameUpper}
            </span>
            <span className="text-xl text-text_primary/70">
              Apellidos: {apellidoUpper}
            </span>
            <p className="mt-4 border-t py-4 text-xl">
              <span className="flex items-center gap-2 font-robotoSlab_600 justify-center">
                Gasto Total {data?.totalGasto}
                <CiMoneyBill className="text-3xl" />
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PacienteDestacado;
