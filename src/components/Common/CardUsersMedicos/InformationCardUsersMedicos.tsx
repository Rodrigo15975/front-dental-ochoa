import { capitalize } from "@/utils";
import { Typography } from "..";

type Props = {
  name?: string;
  dni?: string;
};

const InformationCardUsersMedicos = ({ name, dni }: Props) => {
  const nameCapitalize = capitalize(name ?? "");

  return (
    <>
      <Typography
        label={nameCapitalize}
        className="font-robotoSlab_400 text-text_six/70 text-[1.1rem]"
      />
      <div className="flex items-center gap-2">
        <Typography label={`DNI: ${dni ?? ""}`} className="text-text_primary/80 font-robotoSlab_600" />
      </div>
    </>
  );
};

export default InformationCardUsersMedicos;
