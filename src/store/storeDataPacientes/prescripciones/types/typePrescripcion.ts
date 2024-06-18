interface FuncionalityPrescripcion {
  setOpenModalNewPrescripcion: () => void;
  setOpenModalHistoryReceta: () => void;
}

export interface StorePrescripcion extends FuncionalityPrescripcion {
  openModalNewPrescripcion: boolean;
  openModalHistoryReceta: boolean;
}
