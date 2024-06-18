import ChartEstadisticasBar from "@/components/Common/Charts/ChartEstadisisticasBar";
import { FaFacebook } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";

const Captacion = () => {
  const fuentesDecaptacion = [
    {
      id: 1,
      fuente: "Facebook",
      icon: <FaFacebook />,
      text: "Pacientes captados por Facebook",
      className: "#0c59ffd5",
      count: 10,
    },
    {
      fuente: "Instagram",
      icon: <FaInstagram />,
      text: "Pacientes captados por Instagram",
      id: 2,
      className: "#ff396ada",
      count: 10,
    },
    {
      id: 3,
      fuente: "Tiktok",
      text: "Pacientes captados por Tiktok",
      icon: <SiTiktok />,
      className: "#0d0d11d5 ",
      count: 10,
    },
  ];

  return (
    <div className="w-full justify-evenly flex flex-[0_1_100%] shadow rounded-2xl border bg-default p-8 gap-4">
      <ChartEstadisticasBar
        type="bar"
        labels={["Tiktok", "Instagram", "Facebook"]}
        backgroundColor={["#0d0d11c7", "#ff396bdf", "#0c59ffd6"]}
        dataSet={[2, 4, 4]}
       className="flex-[0_1_30rem] h-[25rem]"
      />
      <div className="flex-[0_1_60%] flex gap-4 flex-col justify-center items-center ">
        <div className="w-full justify-between gap-8 flex flex-col">
          {fuentesDecaptacion.map((value) => (
            <div key={value.id} className="w-full flex items-center">
              <div className="w-full flex items-center justify-between gap-8">
                <div
                  style={{ background: value.className }}
                  className={`flex-[0_1_5rem] flex text-default p-4  items-center justify-center h-[5rem] rounded-md shadow-sm border`}
                >
                  <p className={`text-3xl  `}>{value.icon}</p>
                </div>
                <div className="w-full p-4 flex items-center justify-center h-[5rem] rounded-md shadow-md border border-border_four/20">
                  <p className="flex font-robotoSlab_400 justify-center text-[1.2rem] gap-3 items-center w-full">
                    <span className="font-robotoSlab_600">{value.count}</span>
                    {value.text}{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Captacion;
