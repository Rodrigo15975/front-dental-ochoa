type FuncionalityUpdatePhotoHome = {
  setOpenUpdate: () => void;
  setImgUrl: (url: string) => void;
};
export type StoreUpdateImgHome = FuncionalityUpdatePhotoHome & {
  openUpdate: boolean;
  imgUrl: string;
};
