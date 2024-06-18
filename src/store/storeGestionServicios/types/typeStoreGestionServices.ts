type FuncionalityStoreGestionServicios = {
  setOpenFormGestionServicios: () => void;
  setOpenFormAsignarServicios: () => void;
  setOpenOptionsServicios: () => void;
  setOpenAddNewServicios: () => void;
  setOpenAddExistinServicio: () => void;

  setIdPaciente: (
    id: string,
    apellidos: string,
    name: string,
    mayorEdad: boolean
  ) => void;
};

export type StoreGestionServicios = FuncionalityStoreGestionServicios & {
  openFormGestionServicios: boolean;
  openFormAsignarServicios: boolean;
  openOptionsServicios: boolean;
  openAddNewServicios: boolean;
  openAddExistinServicio: boolean;
  idPaciente: string;
  apellidos: string;
  name: string;
  mayorEdad: boolean;
};
