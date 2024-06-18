export type FunctionalityConfiguracion = {
  setOpenFormEditConfiguracion: () => void;
  setOpenDeleteConfiguracion: () => void;
};

export interface StoreConfiguration extends FunctionalityConfiguracion {
  openFormEditConfiguracion: boolean;
  openDeleteConfiguracion: boolean;
}
