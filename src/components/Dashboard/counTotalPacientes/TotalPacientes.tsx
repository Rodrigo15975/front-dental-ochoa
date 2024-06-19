import ChartEstadisticas from "@/components/Common/Charts/ChartEstadisticas";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useGetAllPacientes } from "@/services/pacientes/queries";

const TotalPacientes = () => {
  const { data, isLoading } = useGetAllPacientes();

  const totalPacientes = data?.length;
  return (
    <>
      {isLoading ? (
        <LoadingStatic />
      ) : (
        <>
          <>
            <p className="mr-4 text-[1.1rem]">
              Pacientes: <span>{totalPacientes}</span>{" "}
            </p>
            <ChartEstadisticas
              backgroundColor={["#318aff"]}
              dataSet={[totalPacientes ?? 0]}
              labels={["Pacientes"]}
              type="pie"
            />
          </>
        </>
      )}
    </>
  );
};

export default TotalPacientes;
