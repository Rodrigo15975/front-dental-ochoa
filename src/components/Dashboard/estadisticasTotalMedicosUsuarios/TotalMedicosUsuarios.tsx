import ChartEstadisticas from "@/components/Common/Charts/ChartEstadisticas";
import TotalPacientes from "../counTotalPacientes/TotalPacientes";
import { useGetAllMedicos } from "@/services/medicos/queries";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useGetAllUsuarios } from "@/services/usuarios/queries";

const TotalMedicosUsuarios = () => {
  const { data, isLoading } = useGetAllMedicos();
  const dataUsuarios = useGetAllUsuarios();

  return (
    <>
      <div className="flex items-center text-text_primary/70 font-robotoSlab_400 gap-6 rounded-2xl justify-start flex-[0_1_10rem]">
        <div className="flex items-center p-4  bg-default shadow border rounded-2xl justify-center flex-[0_1_100%]">
          <TotalPacientes />
        </div>
        {isLoading ? (
          <LoadingStatic />
        ) : (
          <div className="flex items-center p-4  bg-default shadow border rounded-2xl justify-center flex-[0_1_100%]">
            <div className="mr-4 text-[1.1rem] flex flex-col gap-2 ">
              <p>
                Medicos: <span>{data?.length}</span>{" "}
              </p>
              <p>
                Usuarios: <span>{dataUsuarios.data?.length}</span>{" "}
              </p>
            </div>
            <ChartEstadisticas
              type="pie"
              backgroundColor={["#6c9bffce", "#75d8ffd1"]}
              labels={["Usuarios", "Médicos"]}
              dataSet={[dataUsuarios.data?.length, data?.length]}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default TotalMedicosUsuarios;
