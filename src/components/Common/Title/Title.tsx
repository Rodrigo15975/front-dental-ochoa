import { FC, ReactNode } from "react";

type PropsTitle = {
  label: string;
  className?: string;
  children?: ReactNode;
  type: "h1" | "h2";
};

const Title: FC<PropsTitle> = ({ className, label, type, children }) => {
  if (type === "h1")
    return (
      <h1 className={className}>
        {label}
        {children}
      </h1>
    );
  return (
    <h2 className={className}>
      {label}
      {children}
    </h2>
  );
};

export default Title;
