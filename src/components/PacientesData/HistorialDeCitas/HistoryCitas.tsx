import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Timeline } from "primereact/timeline";
import { Toolbar } from "primereact/toolbar";
import { IoPrintOutline } from "react-icons/io5";
import { PiMicrosoftExcelLogoDuotone } from "react-icons/pi";
import CardHistoryCitas from "./CardHistoryCitas";
import { CiCircleCheck } from "react-icons/ci";

const HistoryCitas = () => {
  const startContent = (
    <div className="flex font-robotoSlab items-center gap-3 ">
      <Button
        tooltip="PDF"
        tooltipOptions={{
          position: "top",
        }}
        icon={<IoPrintOutline className="text-4xl text-red-400" />}
        className="mr-2 border  shadow-sm border-border_three/50 hover:bg-bg_three"
      />
      <Button
        tooltipOptions={{
          position: "top",
        }}
        tooltip="EXCEL"
        icon={
          <PiMicrosoftExcelLogoDuotone className="text-4xl text-green-400" />
        }
        className="mr-2 border shadow-sm border-border_three/50 hover:bg-bg_three"
      />
      <InputText
        tooltip="Busqueda por Fecha"
        className="p-4 rounded-lg flex-[0_1_20rem] focus:bg-bg_six/10 border  border-border_three/20 shadow-sm"
        placeholder="Search"
        type="text"
      />
    </div>
  );
  const events = [
    {
      status: "Ordered",
      date: "18/10/2024",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      status: "Processing",
      date: "15/10/2020",
      icon: "pi pi-cog",
      color: "#673AB7",
      image: "game-controller.jpg",
    },
    {
      status: "Shipped",
      date: "15/10/2020",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
      image: "game-controller.jpg",
    },
    {
      status: "Delivered",
      date: "16/10/2010",
      icon: "pi pi-check",
      color: "#607D8B",
      image: "game-controller.jpg",
    },
  ].reverse();

  const customizedMarker = () => {
    return (
      <span className="flex bg-bg_three/80 shadow-lg border items-center gap-2 p-2  align-items-center rounded-full justify-content-center text- border-circle z-1 shadow-1">
        <CiCircleCheck className="text-3xl" />
      </span>
    );
  };

  return (
    <>
      <Toolbar className="bg-default shadow" start={startContent} />
      <Timeline
        value={events}
        align="bottom"
        className=" bg-default shadow-sm  font-robotoSlab"
        marker={customizedMarker}
        content={CardHistoryCitas}
      />
    </>
  );
};

export default HistoryCitas;
