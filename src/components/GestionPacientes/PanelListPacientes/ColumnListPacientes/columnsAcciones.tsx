import { Button, ButtonIcon, Modal, Typography } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { PathsSubRoutingProtected } from "@/router/enum/routerPaths";
import { useDeletePaciente } from "@/services/pacientes/mutation";
import { GetAllPacientes } from "@/services/pacientes/types/typesPaciente";
import { capitalize } from "@/utils";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BiArrowBack, BiEditAlt, BiTrash, BiUser } from "react-icons/bi";
import { CiWarning } from "react-icons/ci";
import { FcViewDetails } from "react-icons/fc";
import { TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";

type Props = {
  data: GetAllPacientes;
};
const ColumnsAcciones = ({ data }: Props) => {
  const { _id, mayorEdad, apellidos, name } = data;
  const upperName = capitalize(name);
  const upperApellidos = capitalize(apellidos);

  const [askDelete, setAskDelete] = useState<boolean>(false);

  const successDelete = () => setAskDelete(!askDelete);
  const { mutate, isPending } = useDeletePaciente(successDelete);
  const deletePaciente = () => mutate({ id: _id, mayorEdad });

  return (
    <>
      <div className="flex justify-center gap-2">
        <CommonTooltip
          title="Actualizar"
          className="flex-[0_1_5rem] flex justify-center"
        >
          <Link
            className="w-full h-full"
            to={`${PathsSubRoutingProtected.GESTIONES_PACIENTES_DATA_PERSONALES}/${_id}`}
          >
            <ButtonIcon className="w-full flex rounded-3xl cursor-pointer hover:shadow-none bg-bg_three/50 hover:rounded-md transition-all justify-center p-1 shadow-md">
              <BiEditAlt className="text-[1.7rem]" />
            </ButtonIcon>
          </Link>
        </CommonTooltip>
        <CommonTooltip
          title="Detalles"
          className="flex-[0_1_5rem] flex justify-center"
        >
          <Link
            className="w-full h-full"
            to={`${PathsSubRoutingProtected.GESTIONES_PACIENTES_DATA_PERSONALES}/${_id}`}
          >
            <ButtonIcon className="w-full flex rounded-3xl cursor-pointer hover:shadow-none bg-bg_primary/50 hover:rounded-md transition-all justify-center p-1 shadow-md">
              <FcViewDetails className="text-[1.7rem]" />
            </ButtonIcon>
          </Link>
        </CommonTooltip>
        <CommonTooltip
          title="Eliminar"
          className="flex-[0_1_5rem] flex justify-center"
        >
          <ButtonIcon
            onClick={successDelete}
            className="w-full flex rounded-3xl cursor-pointer hover:shadow-none bg-bg_seven/50 hover:rounded-md transition-all justify-center p-1 shadow-md"
          >
            <TbTrash className="text-[1.7rem]" />
          </ButtonIcon>
        </CommonTooltip>
      </div>
      <AnimatePresence>
        {askDelete && (
          <Modal
            className="bg-default  border shadow-xl rounded-2xl p-8 flex-[0_1_40rem] min-h-[20vh] relative"
            type="CENTER"
            animate="LEFT"
          >
            <Button
              type="button"
              btnDefault
              onClick={successDelete}
              className="absolute -top-4 text-2xl bg-default text-text_eight -right-4 "
            >
              <BiArrowBack />
            </Button>
            <div className="flex flex-col gap-2">
              <div className="flex p-2 gap-2 justify-center bg-bg_three/50  w-full">
                <Typography label={`Paciente:`} className=" text-xl" />
                <Typography
                  label={` ${upperApellidos} ${upperName} `}
                  className=" text-text_six flex items-center justify-center gap-2 font-robotoSlab_600 text-xl"
                >
                  <BiUser />
                </Typography>
              </div>
              <Typography
                label={`Toda información del paciente será eliminada`}
                className="flex justify-center text-xl my-2 text-text_five items-center gap-2"
              >
                <CiWarning className="text-2xl" />
              </Typography>
              <div className="flex flex-col gap-4">
                {isPending ? (
                  <LoadingStatic />
                ) : (
                  <Button
                    type="button"
                    onClick={deletePaciente}
                    label="Eliminar"
                    btnDefault
                    className="flex font-robotoSlab_500 h-[2.7rem] items-center hover:bg-bg_seven justify-center gap-2 bg-bg_seven/80"
                  >
                    <BiTrash />
                  </Button>
                )}
                <Button
                  onClick={successDelete}
                  type="button"
                  label="Cancelar"
                  btnDefault
                  className="flex font-robotoSlab_500 h-[2.7rem] items-center hover:bg-bg_five/90 justify-center gap-2 bg-bg_five/50"
                >
                  <BiArrowBack />
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ColumnsAcciones;
