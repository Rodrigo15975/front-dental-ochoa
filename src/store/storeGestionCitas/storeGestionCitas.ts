import { create } from "zustand";
import { StoreGestionCitas } from "./types/typeStoreGestionCitas";

const storeGestionCitas = create<StoreGestionCitas>((set, get) => ({
  openConfiguration: false,
  openModalListEspera: false,
  openModalListMedico: false,
  openModalListSala: false,
  setOpenConfiguration() {
    const { openConfiguration } = get();
    set({ openConfiguration: !openConfiguration });
  },

  setOpenModalListEspera() {
    const { openModalListEspera } = get();
    set({ openModalListEspera: !openModalListEspera });
  },
  setOpenModalListSala() {
    const { openModalListSala } = get();
    set({ openModalListSala: !openModalListSala });
  },

  setOpenModalListMedico() {
    const { openModalListMedico } = get();
    set({ openModalListMedico: !openModalListMedico });
  },
}));

export default storeGestionCitas;
