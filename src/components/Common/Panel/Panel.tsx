import { FC, ReactNode } from "react";

type PropsCommonPanel = {
  headerChildren?: ReactNode;
  panelChildren?: ReactNode;
  className?: string;
};

const Panel: FC<PropsCommonPanel> = ({
  headerChildren,
  panelChildren,
  className,
}) => {
  return (
    <article className="flex justify-end px-[2rem] py-[1.8rem]  flex-col min-h-[93vh]">
      <div
        className={`min-h-[0vh] ${className} flex justify-between mb-[1rem] items-end`}
      >
        {headerChildren}
      </div>
      <div
        className={`min-h-[70vh] p-4 rounded-lg border-border_primary/50 shadow-md bg-bg_primary/5 border`}
      >
        {panelChildren}
      </div>
    </article>
  );
};

export default Panel;
