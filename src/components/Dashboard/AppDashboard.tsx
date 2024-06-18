import { useEffect, useState } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { Container } from "../Common";
import ChartEstadisticas from "../Common/Charts/ChartEstadisticas";
import ContainerPanel from "../Common/Container/ContainerMain";
import DashboardHeader from "./HeaderDashboard";
import Captacion from "./estadisticaCaptacion/Captacion";
import ChartEstadisticasBar from "../Common/Charts/ChartEstadisisticasBar";
const AppDashboard: React.FC = () => {
  const [ultimaCita, setUltimaCita] = useState(
    new Date("2024-05-04T04:48:56-05:00")
  );
  const [diasPasados, setDiasPasados] = useState(0);

  useEffect(() => {
    // Calcular cuántos días han pasado desde la última cita
    const ahora = new Date();
    const tiempoPasado = ahora.getTime() - ultimaCita.getTime();
    const diasPasados = Math.floor(tiempoPasado / (1000 * 60 * 60 * 24));
    setDiasPasados(diasPasados);
  }, [ultimaCita]);

  return (
    <Container>
      <DashboardHeader
        icon={<MdDashboardCustomize className="text-bg_six" />}
        title="Dashboard"
      />
      {/* <p>Mi última cita fue el {ultimaCita.toLocaleDateString()}.</p>
      <p>La cita fue hace {diasPasados} días.</p> */}

      <ContainerPanel className="p-8 flex flex-col gap-6 min-h-screen my-4">
        <div className="w-full justify-between gap-6 flex">
          <div className="flex p-4 bg-default shadow border rounded-2xl justify-center flex-[0_1_30rem]">
            <ChartEstadisticas
              type="pie"
              backgroundColor={["#6c9bffce", "#75d8ffd1"]}
              labels={["Usuarios", "Médicos"]}
              dataSet={[5, 4]}
            />
          </div>
        </div>
        <div className="w-full justify-between gap-6 flex">
          <Captacion />
        </div>
      </ContainerPanel>
    </Container>
  );
};

export default AppDashboard;
