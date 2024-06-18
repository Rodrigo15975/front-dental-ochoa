import { Typography } from "@/components/Common";
import { FC, ReactNode } from "react";

type PropsInformation = {
  title: string;
  iconTitle?: ReactNode;
};

const InformacionConfiguracion: FC<PropsInformation> = ({
  title,
  iconTitle,
}) => {
  return (
    <div className="w-full  bg-bg_six p-4">
      <div className="text-center border-border_primary">
        <Typography
          className="text-2xl flex items-center justify-center gap-2 text-default font-robotoSlab_500"
          label={title}
        >
          {iconTitle}
        </Typography>
      </div>
    </div>
  );
};

export default InformacionConfiguracion;
