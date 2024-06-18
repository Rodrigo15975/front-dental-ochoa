type FunctionalityAdminProfile = {
  setOpenOption: () => void;
};

export interface StoreOptionProfile extends FunctionalityAdminProfile {
  openOption: boolean;
}
