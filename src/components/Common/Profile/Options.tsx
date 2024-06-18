import { AnimatePresence } from "framer-motion";
import { FC, PropsWithChildren } from "react";
import { Modal } from "..";

interface PropsOptions {
  setState: () => void;
  state: boolean;
  className: string;
  typeMode: "BOTTOM-RIGHT" | "CENTER";
}

const Options: FC<PropsWithChildren & PropsOptions> = ({
  children,
  setState,
  state,
  className,
  typeMode,
}) => {
  return (
    <>
      <AnimatePresence>
        {state && (
          <Modal
            className={` ${className} flex min-h-[40vh] p-[2rem] shadow-md rounded-xl mx-4 mb-4`}
            type={typeMode}
            onClick={setState}
          >
            {children}
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Options;
