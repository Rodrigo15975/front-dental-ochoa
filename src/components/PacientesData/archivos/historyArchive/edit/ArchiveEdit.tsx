import { Modal } from "@/components/Common";
import { AnimatePresence } from "framer-motion";

type Props = {
  state: boolean;
  onClick: () => void;
};

export default function ArchiveEdit({ state, onClick }: Props) {
  return (
    <>
      <AnimatePresence>
        {state && (
          <Modal
            className="flex-[0_1_90rem] container border shadow-md rounded-3xl border-border_three/50 bg-default min-h-[80vh]"
            type="CENTER"
            onClick={onClick}
            animate="RIGHT"
          ></Modal>
        )}
      </AnimatePresence>
    </>
  );
}
