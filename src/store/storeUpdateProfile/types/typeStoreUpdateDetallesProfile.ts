type FunctionalityDetallesProfile = {
  setOpenDetallesProfile: () => void;
};

export interface StoreDetallesProfile
  extends FunctionalityDetallesProfile {
  openDetalles: boolean;
}
