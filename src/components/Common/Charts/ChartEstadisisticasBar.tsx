import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";

interface Estadisticas<T> {
  labels: string[];
  dataSet: T[];
  backgroundColor: string[];
  hoverBackgroundColor?: string[];
  type?: "bar";
  className?: string;
}

const ChartEstadisticasBar = <T,>({
  dataSet,
  labels,
  backgroundColor,
  hoverBackgroundColor,
  type,
  className,
}: Estadisticas<T>) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Fuente de captación",
          data: dataSet,
          backgroundColor,
          borderWidth: 1,
        },
      ],
      font: {
        family: "Roboto Slab, serif",
        size: 20,
      },
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
      scales: {
        x: {
          ticks: {
            font: {
              family: "Roboto Slab, serif", // Especificar la fuente aquí
              size: 18,
            },
          },
        },
        y: {
          ticks: {
            font: {
              family: "Roboto Slab, serif", // Especificar la fuente aquí
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
        className={className}
      />
    </>
  );
};

export default ChartEstadisticasBar;
