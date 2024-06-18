type FuncionalityUpdateProfile = {
  setOpenUpdateProfile: () => void;
};

export type StoreUpdateProfile = FuncionalityUpdateProfile & {
  openUpdateProfile: boolean;
};
