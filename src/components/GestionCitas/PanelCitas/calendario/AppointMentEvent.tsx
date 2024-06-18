import { GetAllCitas } from "@/services/citas/types/typesCitas";
import { capitalize } from "@/utils";
import { m } from "framer-motion";
import { RiReservedLine } from "react-icons/ri";
import { RiFileUserLine } from "react-icons/ri";

type Props = {
  data: GetAllCitas | undefined;
};

export default function AppointMentEvent({ data }: Props) {
  const estadoUpper = capitalize(data?.estado.estado ?? "");
  const nameUpper = capitalize(data?.paciente.name ?? "");
  const apellidosUpper = capitalize(data?.paciente.apellidos ?? "");
  return (
    <>
      <m.div
        style={{
          background: data?.estado.bg,
        }}
        className="h-full rounded-md relative hover:rounded-xl transition-all text-text_primary/80 font-robotoSlab_500 flex flex-col gap-1 p-1 hover:"
      >
        <p className="flex gap-1">
          Estado:
          <span className="flex gap-1 items-center text-text_primary font-robotoSlab_700">
            {estadoUpper} <RiReservedLine />
          </span>
        </p>
        <p className="font-robotoSlab_500">
          <span>Paciente</span>
          <span className="flex gap-1 font-robotoSlab_600 text-text_primary">
            {nameUpper} {apellidosUpper} <RiFileUserLine />
          </span>
        </p>
      </m.div>
    </>
  );
}
