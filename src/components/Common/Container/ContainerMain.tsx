import { FC, PropsWithChildren } from "react";

type PropsContainerMain = {
  className?: string;
  type?: "Default" | "Main";
};
const ContainerMain: FC<PropsContainerMain & PropsWithChildren> = ({
  className,
  children,
  type,
}) => {
  if (type === "Default")
    return (
      <section className="px-[2rem]">
        <article className={`${className}`}>{children}</article>
      </section>
    );

  return (
    <section className="px-[1rem]">
      <article
        className={`bg-bg_primary/5 transition border-border_primary/20 rounded-lg border ${className} `}
      >
        {children}
      </article>
    </section>
  );
};

export default ContainerMain;
