type FuncionalityStoreGestionUsuarios = {
  setOpenFormGestionUsuarios: () => void;
};

export type StoreGestionUsuarios = FuncionalityStoreGestionUsuarios & {
  openFormGestionUsuarios: boolean;
};
