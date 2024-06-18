import { Variants } from "framer-motion";

// Modal-variants
export const modalVariantsTop: Variants = {
  initial: { translateX: "10%", opacity: 0 },
  animate: { translateX: "0", opacity: 1 },
  exit: {
    translateX: "10%",
    opacity: 0,
  },
};

export const modalVarianOpacity: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: {
    opacity: 0,
  },
};

export const modalVariantsRight: Variants = {
  initial: { translate: "100%", opacity: 0 },
  animate: { translate: "0", opacity: 1 },
  exit: { translate: "-100%", opacity: 0 },
};

export const modalVariantsLeft: Variants = {
  initial: { translateX: "10%", opacity: 0 },
  animate: { translateX: "0", opacity: 1 },
  exit: { translateY: "0%", opacity: 0 },
};

export const modalVariantsBottom: Variants = {
  initial: { translate: "100%", opacity: 0 },
  animate: { translate: "0", opacity: 1 },
  exit: {
    translateX: "100%",
    scale: "0",
    opacity: 0,
    transition: {
      duration: "0.5",
    },
  },
};

export const modalScaleAnimate: Variants = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: {
    scale: "0",
    opacity: 0,
    transition: {
      duration: "0.5",
    },
  },
};

export const variantsPages: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// VARIANTS PARA ANIMACION EN ORDEN CONTAINER Y CHILDREN

export const varianContainer: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const varianItemAnimate: Variants = {
  hidden: { translate: "1%", opacity: 0 },
  show: { translate: "0", opacity: 1 },
};
