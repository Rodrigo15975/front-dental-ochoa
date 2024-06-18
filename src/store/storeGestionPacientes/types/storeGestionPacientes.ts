type FuncionalityStoreGestionPaciente = {
  setOpenFormGestionPaciente: () => void;
  setOpenNewServicesGestionPaciente: () => void;

  setOpenDeletePaciente: () => void;
};

export type StoreGestionPaciente = FuncionalityStoreGestionPaciente & {
  openFormGestionPaciente: boolean;
  openNewServicesGestionPaciente: boolean;
  openDeletePaciente: boolean;
};
