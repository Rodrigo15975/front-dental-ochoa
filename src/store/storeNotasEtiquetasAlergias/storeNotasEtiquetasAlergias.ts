import { create } from "zustand";

type Props = {
  setOpenEtiquetas: () => void;
  setOpenAlergias: () => void;
  setOpenNotas: () => void;
  openEtiquetas: boolean;
  openNotas: boolean;
  openAlergias: boolean;
};

const storeNotasEtiquetasAlergias = create<Props>((set, get) => ({
  openAlergias: false,
  openEtiquetas: false,
  openNotas: false,
  setOpenAlergias() {
    const { openAlergias } = get();
    set({ openAlergias: !openAlergias });
  },
  setOpenEtiquetas() {
    const { openEtiquetas } = get();
    set({ openEtiquetas: !openEtiquetas });
  },
  setOpenNotas() {
    const { openNotas } = get();
    set({ openNotas: !openNotas });
  },
}));

export default storeNotasEtiquetasAlergias;
