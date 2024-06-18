import { Typography } from "@/components/Common";
import { Card } from "primereact/card";

const CardHistoryCitas = () => {
  return (
    <>
      <Card
        className="font-robotoSlab my-4 hover:shadow-xl transition border-border_three/50 shadow-md border"
        subTitle={
          <div className="text-text_primary/90">
            <p className="font-robotoSlab_600 text-[1.1rem]">
              Fecha creada: 28/04/2024
            </p>
            <p className="">Hora: 04:17AM</p>
          </div>
        }
      >
        <div className="w-full flex justify-between gap-3 h-full">
          <div className="flex flex-col text-text_primary  flex-[0_1_100%] justify-between gap-2 min-h-[15rem]">
            <div className="flex border rounded-md shadow border-border_four/20">
              <Typography
                className="font-robotoSlab_600 flex items-center justify-center border-r h-[3rem] bg-bg_nine/20 text-center flex-[0_1_10rem] "
                label="Médico"
              />
              <p className="pl-4 flex items-center justify-center font-robotoSlab_300">
                Rodrigo Rumpler Braun
              </p>
            </div>
            <div className="flex rounded-md border-border_four/20 shadow  border">
              <Typography
                className="font-robotoSlab_600 h-[3rem] flex items-center justify-center bg-bg_nine/20 border-r text-center flex-[0_1_10rem] "
                label="Servicio"
              />
              <span className="pl-4 flex items-center justify-center font-robotoSlab_300">
                Extracción ortodoncia
              </span>
            </div>
            <div className="flex rounded-md border-border_four/20 shadow border">
              <Typography
                className="font-robotoSlab_600 h-[3rem] flex items-center justify-center bg-bg_nine/20 border-r text-center flex-[0_1_10rem] "
                label="Estado de la cita"
              />
              <span className="pl-4 flex items-center justify-center font-robotoSlab_300">
                Cancelado
              </span>
            </div>
            <div className="flex rounded-md border-border_four/20 shadow border">
              <Typography
                className="font-robotoSlab_600 h-[3rem] flex items-center justify-center bg-bg_nine/20 border-r text-center flex-[0_1_10rem] "
                label="Observación"
              />
              <span className="pl-4 flex items-center justify-center font-robotoSlab_300">
                No vino y tampoco contesto
              </span>
            </div>
          </div>
          {/* <div className="flex flex-col rounded-md border shadow-md w-full gap-4 p-4 flex-[0_1_15rem] justify-start">
            <Tooltip position="leftBottom" title="Editar información">
              <ButtonIcon
                // onClick={openModalEdit}
                className="h-[2.7rem] cursor-pointer flex items-center rounded-md shadow-sm justify-center bg-bg_three/80"
              >
                <MdModeEdit className="text-xl text-text_primary" />
              </ButtonIcon>
            </Tooltip>

            <Tooltip position="leftBottom" title="Detalles">
              <ButtonIcon
                // onClick={openModalDetail}
                className="h-[2.7rem] cursor-pointer flex items-center rounded-md shadow-sm  justify-center bg-bg_three/50 "
              >
                <MdLibraryBooks className="text-xl text-text_primary" />
              </ButtonIcon>
            </Tooltip>
          </div> */}
        </div>
      </Card>
    </>
  );
};

export default CardHistoryCitas;
