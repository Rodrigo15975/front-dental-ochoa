interface FuncionalityGestionCitas {
  setOpenConfiguration: () => void;
  setOpenModalListEspera: () => void;
  setOpenModalListMedico: () => void;
  setOpenModalListSala: () => void;
}

export interface StoreGestionCitas extends FuncionalityGestionCitas {
  openConfiguration: boolean;
  openModalListEspera: boolean;
  openModalListMedico: boolean;
  openModalListSala: boolean;
}
