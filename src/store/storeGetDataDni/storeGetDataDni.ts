import { DataDni } from "@/services/DNI/types/typesUsuarios";
import { create } from "zustand";

export interface StoreGetDataDni {
  dataDni: DataDni;
  updateDatDni: (data: DataDni) => void;
  clearDataDni: () => void;
}

const storeGetDataDni = create<StoreGetDataDni>((set) => ({
  dataDni: {
    apellidoMaterno: "",
    apellidoPaterno: "",
    nombres: "",
    numeroDocumento: "",
  },

  updateDatDni(data) {
    set({ dataDni: { ...data } });
  },
  clearDataDni() {
    set({
      dataDni: {
        apellidoMaterno: "",
        apellidoPaterno: "",
        nombres: "",
        numeroDocumento: "",
      },
    });
  },
}));

export default storeGetDataDni;
