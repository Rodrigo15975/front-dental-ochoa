import { FC, ReactNode } from "react";

type PropsButton = {
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
  
};

const ButtonIcon: FC<PropsButton> = ({ className, onClick, children }) => {
  return (
    <>
      <div onClick={onClick} className={className}>
        {children}
      </div>
    </>
  );
};

export default ButtonIcon;
