import { m } from "framer-motion";
import { FC } from "react";
import { PropsModal } from "./Types/modal";
import {
  modalScaleAnimate,
  modalVarianOpacity,
  modalVariantsBottom,
  modalVariantsLeft,
  modalVariantsRight,
  modalVariantsTop,
} from "./variants/variants";

const Modal: FC<PropsModal> = ({
  animate,
  className,
  children,
  onClick,
  type,
}) => {
  if (animate === "OPACITY" && type === "CENTER")
    return (
      <m.div
        onClick={onClick}
        className={`px-[2rem] fixed z-[2000] bg-white/70 inset-0 flex items-center justify-center`}
        variants={modalVarianOpacity}
        initial={"initial"}
        exit={"exit"}
        animate={"animate"}
      >
        <div className={className} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </m.div>
    );

  if (animate === "SCALE-CENTER" && type === "CENTER")
    return (
      <m.div
        onClick={onClick}
        className={`px-[2rem] fixed z-[2000] bg-white/70 inset-0 flex items-center justify-center`}
        variants={modalScaleAnimate}
        initial={"initial"}
        exit={"exit"}
        animate={"animate"}
      >
        <div className={className} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </m.div>
    );

  if (animate === "RIGHT" && type === "CENTER")
    return (
      <m.div
        onClick={onClick}
        className={`px-[2rem] fixed z-[2000] bg-white/70 inset-0 flex items-center justify-center`}
        variants={modalVariantsRight}
        initial={"initial"}
        exit={"exit"}
        animate={"animate"}
      >
        <div className={className} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </m.div>
    );

  if (animate === "LEFT" && type === "CENTER")
    return (
      <m.div
        onClick={onClick}
        className={`px-[2rem] fixed z-[2000] bg-white/70 inset-0 flex items-center justify-center`}
        variants={modalVariantsLeft}
        initial={"initial"}
        exit={"exit"}
        animate={"animate"}
      >
        <div className={className} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </m.div>
    );

  if (animate === "TOP" && type === "CENTER")
    return (
      <m.div
        onClick={onClick}
        className={`px-[2rem] fixed z-[2000] bg-white/70 inset-0 flex items-center justify-center`}
        variants={modalVariantsTop}
        initial={"initial"}
        exit={"exit"}
        animate={"animate"}
      >
        <div className={className} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </m.div>
    );

  if (animate === "BOTTOM" && type === "CENTER")
    return (
      <m.div
        onClick={onClick}
        className={`px-[2rem] fixed z-[2000] bg-white/70 inset-0 flex items-center justify-center`}
        variants={modalVariantsBottom}
        initial={"initial"}
        exit={"exit"}
        animate={"animate"}
      >
        <div className={className} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </m.div>
    );

  if (type === "BOTTOM-RIGHT")
    return (
      <m.div
        onClick={onClick}
        className={`px-[2rem] fixed z-[2000] bg-white/70 inset-0 flex items-end justify-end`}
        variants={modalVariantsRight}
        initial={"initial"}
        exit={"exit"}
        animate={"animate"}
      >
        <div className={className} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </m.div>
    );

  return (
    <m.div
      onClick={onClick}
      className={`px-[2rem] fixed z-[2000] bg-white/70 inset-0 flex justify-center items-center`}
      variants={modalVariantsRight}
      initial={"initial"}
      exit={"exit"}
      animate={"animate"}
    >
      <div className={className} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </m.div>
  );
};

export default Modal;
