import { Table } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useAllEstadisticasPacientesNuevos } from "@/services/stadisticasPacienteNuevos/queries";
import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";
import ColumnsStadisticas from "./columnsStadisticas";

const monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const EstadisticasNuevosPacienteMounth = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const { data, isLoading } = useAllEstadisticasPacientesNuevos();
  const { columns } = ColumnsStadisticas();
  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--blue-500");
    const textColorSecondary = documentStyle.getPropertyValue(
      "--text-color-secondary"
    );
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    if (data) {
      const labels = data.map(
        (item) => `${monthNames[item._id.month - 1]} ${item._id.year}`
      );
      const newPatientsData = data.map((item) => item.count);

      const chartData = {
        labels,
        datasets: [
          {
            label: "Nuevos pacientes",
            data: newPatientsData,
            fill: false,
            borderColor: documentStyle.getPropertyValue("--blue-500"),
            tension: 0.5,
          },
        ],
      };

      setChartData(chartData);

      const options = {
        plugins: {
          legend: {
            labels: {
              color: textColor,
              font: {
                family: "Roboto Slab, serif",
                size: 18,
                fontWeight: 600,
              },
            },
          },
        },

        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                family: "Roboto Slab, serif",
                size: 16,
              },
              maxTicksLimit: 7, // Limitar a 6 etiquetas en el eje x
              autoSkip: true, // Saltar etiquetas automáticamente si es necesario
            },
            grid: {
              color: surfaceBorder,
            },
          },
          y: {
            ticks: {
              color: textColorSecondary,
              font: {
                family: "Roboto Slab, serif",
                size: 18,
              },
            },
            grid: {
              color: surfaceBorder,
            },
          },
        },
        maintainAspectRatio: false,

        responsive: true,
      };

      setChartOptions(options);
    }
  }, [data]);

  const header = () => <></>;

  return (
    <>
      {isLoading ? (
        <LoadingStatic />
      ) : (
        <div className="w-full justify-between gap-6 flex">
          <div className="flex w-full gap-8 bg-default p-8 shadow border-border_three/20 border rounded-2xl justify-center">
            {chartData ? (
              <Chart
                height="30rem"
                width="62%"
                type="line"
                data={chartData}
                options={chartOptions}
              />
            ) : (
              <p>Loading chart data...</p>
            )}
            <Table
              className="max-w-[25rem]"
              columnsConfig={columns}
              data={data}
              loading={isLoading}
              headerClassName="bg-bg_six/50 text-default"
              globalFilter=""
              row={5}
              header={header()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EstadisticasNuevosPacienteMounth;
