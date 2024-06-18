import { create } from "zustand";

type Props = {
  search: string;
  searchByServices: string;
  searchByUsuarios: string;
  setSearch: (searchByServices: string) => void;
  setSearchByServices: (search: string) => void;
  setSearchByUsuarios: (search: string) => void;
};

export const storeUsuarioAndMedico = create<Props>((set) => ({
  searchByUsuarios: "",
  setSearchByUsuarios(search) {
    set({ searchByUsuarios: search.toLowerCase() });
  },

  // medicos
  search: "",
  setSearch(search) {
    set({ search: search.toLowerCase() });
  },
  // servicios
  searchByServices: "",
  setSearchByServices(searchByServices) {
    set({ searchByServices: searchByServices.toLowerCase() });
  },
}));
