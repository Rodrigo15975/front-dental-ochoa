import { FC, ReactNode } from "react";

type PropsTypography = {
  label: string;
  className: string;
  children?: ReactNode;
};

const Typography: FC<PropsTypography> = ({ className, label, children }) => {
  return (
    <p className={className}>
      {label}
      {children}
    </p>
  );
};

export default Typography;
