import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";

interface Estadisticas<T> {
  labels: string[];
  dataSet: T[];
  backgroundColor: string[];
  hoverBackgroundColor?: string[];
  type?: "pie";
}

const ChartEstadisticas = <T,>({
  dataSet,
  labels,
  backgroundColor,
  hoverBackgroundColor,
  type,
}: Estadisticas<T>) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: labels,
      datasets: [
        {
          data: dataSet,
          backgroundColor,
          hoverBackgroundColor,
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            font: {
              family: "Roboto Slab, serif",
              size: 18,
            },
          },
        },
      },

      responsive: true,
      maintainAspectRatio: false,
    };

    setChartData(data);
    setChartOptions(options);
  }, [dataSet, labels, backgroundColor, hoverBackgroundColor]);
  return (
    <>
      <Chart
        type={type}
        data={chartData}
        options={chartOptions}
        className=" flex-[0_1_30rem] h-[25rem]"
      />
    </>
  );
};

export default ChartEstadisticas;
