import { create } from "zustand";
import { StoreGetDataRuc } from "./types/typesGetDataRuc";

const storeGetDataRuc = create<StoreGetDataRuc>((set) => ({
  updateDataRuc(dataRuc) {
    set({ dataRuc });
  },
  clearDataRuc() {
    set({
      dataRuc: {
        departamento: "",
        direccion: "",
        distrito: "",
        numeroDocumento: "",
        provincia: "",
        razonSocial: "",
        condicion: "",
        estado: "",
      },
    });
  },
  dataRuc: {
    departamento: "",
    direccion: "",
    distrito: "",
    numeroDocumento: "",
    provincia: "",
    razonSocial: "",
    condicion: "",
    estado: "",
  },
}));
export default storeGetDataRuc;
