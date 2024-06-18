import { FC, PropsWithChildren } from "react";

interface Props {
  className?: string;
}

const ContainerData: FC<PropsWithChildren & Props> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`pacientes-data container flex border border-border_three/50 gap-4 justify-center h-full w-full rounded-md p-4 ${className} `}
    >
      {children}
    </div>
  );
};

export default ContainerData;
