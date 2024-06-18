import { FC, PropsWithChildren } from "react";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <article className="container max-w-[100%]">{children}</article>
  );
};

export default Container;
