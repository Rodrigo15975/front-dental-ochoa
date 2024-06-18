import { ButtonIcon, Loading } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { useGetEmpresa } from "@/services/configuracion";
import { storeConfiguracion } from "@/store";
import { capitalize } from "@/utils";
import { BiEditAlt } from "react-icons/bi";
import { FcViewDetails } from "react-icons/fc";
import { RiDeleteBinLine } from "react-icons/ri";

import AppFormularioEditarConfiguracion from "./FormularioEditarConfiguracion/AppFormularioEditarConfiguracion";
import FormularioDeleteConfiguracion from "./FormularioEditarConfiguracion/FormularioDeleteConfiguracion";

const DetallesConfiguracion = () => {
  const { setOpenFormEditConfiguracion, setOpenDeleteConfiguracion } =
    storeConfiguracion();
  const { data, isPending } = useGetEmpresa();

  const { razon_social, distrito, provincia, departamento } = data!;

  const razonSocial = capitalize(razon_social ?? "");
  const provin = capitalize(provincia ?? "");
  const dis = capitalize(distrito ?? "");
  const depar = capitalize(departamento ?? "");

  if (isPending) return <Loading />;

  return (
    <>
      <div className="p-8">
        <div className="flex justify-end gap-4 mb-4">
          {data?.isRegisterConsultorio && (
            <>
              <CommonTooltip title="Detalles">
                <ButtonIcon
                  onClick={setOpenFormEditConfiguracion}
                  className="bg-bg_five text-default p-2 cursor-pointer rounded-full  shadow-md"
                >
                  <FcViewDetails className="text-3xl" />
                </ButtonIcon>
              </CommonTooltip>
              <CommonTooltip title="Editar información">
                <ButtonIcon
                  onClick={setOpenFormEditConfiguracion}
                  className="bg-bg_three text-text_primary p-2 cursor-pointer rounded-full  shadow-md"
                >
                  <BiEditAlt className="text-3xl" />
                </ButtonIcon>
              </CommonTooltip>

              <CommonTooltip title="Eliminar información">
                <ButtonIcon
                  onClick={setOpenDeleteConfiguracion}
                  className="bg-bg_seven p-2 cursor-pointer rounded-full shadow-md"
                >
                  <RiDeleteBinLine className="text-3xl" />
                </ButtonIcon>
              </CommonTooltip>
            </>
          )}
        </div>
        <div className="flex flex-wrap justify-center w-full gap-4">
          <p className="flex-[0_1_100%] min-h-[4rem] text-text_primary shadow-md rounded-lg hover:shadow-none transition border-border_four/30 font-robotoSlab_500 items-center px-4 flex gap-4  w-full justify-between border">
            <span className="flex-[0_1_12rem]">Ruc</span>
            <span className="flex-[0_1_40rem] text-center  font-robotoSlab_500 text-text_default bg-bg_secondary/30  rounded p-1">
              {data?.ruc}
            </span>
          </p>
          <p className=" text-text_primary shadow-md rounded-lg hover:shadow-none  transition border-border_four/30 font-robotoSlab_500 items-center px-4 flex gap-4 flex-[0_1_100%] min-h-[4rem] w-full justify-between border">
            <span className="flex-[0_1_12rem]">Razón Social</span>
            <span className="flex-[0_1_40rem] text-center  font-robotoSlab_500 text-text_default bg-bg_secondary/30  rounded p-1">
              {razonSocial}
            </span>
          </p>
          <p className=" text-text_primary shadow-md rounded-lg hover:shadow-none  transition border-border_four/30 font-robotoSlab_500 items-center px-4 flex gap-4 flex-[0_1_100%] min-h-[4rem] w-full justify-between border">
            <span className="flex-[0_1_12rem]">Departamento</span>
            <span className="flex-[0_1_40rem] text-center  font-robotoSlab_500 text-text_default bg-bg_secondary/30  rounded p-1">
              {depar}
            </span>
          </p>
          <p className=" text-text_primary shadow-md rounded-lg hover:shadow-none  transition border-border_four/30 font-robotoSlab_500 flex items-center px-4 gap-4 flex-[0_1_100%] min-h-[4rem] w-full justify-between border">
            <span className="flex-[0_1_12rem]">Provincia</span>
            <span className="flex-[0_1_40rem] text-center  font-robotoSlab_500 text-text_default bg-bg_secondary/30  rounded p-1">
              {provin}
            </span>
          </p>
          <p className=" text-text_primary shadow-md rounded-lg hover:shadow-none  transition border-border_four/30 font-robotoSlab_500 items-center px-4 flex gap-4 flex-[0_1_100%] min-h-[4rem] w-full justify-between border">
            <span className="flex-[0_1_12rem]">Distrito</span>
            <span className="flex-[0_1_40rem] text-center font-robotoSlab_500 bg-bg_secondary/30 rounded p-1 text-text_default">
              {dis}
            </span>
          </p>
        </div>
      </div>
      {/* Formulario para editar información */}
      <AppFormularioEditarConfiguracion />
      {/* Modal para eliminar informacion */}
      <FormularioDeleteConfiguracion />
    </>
  );
};

export default DetallesConfiguracion;
