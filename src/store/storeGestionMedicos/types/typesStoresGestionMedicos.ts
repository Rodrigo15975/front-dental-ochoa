
type FuncionalityStoreGestionMedicos = {
  setOpenFormGestionMedicos: () => void;
  setOpenAsistenciaMedicos: () => void;
  setOpenListInactiveMedicos: () => void;
};

export type StoreGestionMedicos = FuncionalityStoreGestionMedicos & {
  openFormGestionMedicos: boolean;
  openAsistenciaMedicos: boolean;
  openListInactiveMedicos: boolean;
};
