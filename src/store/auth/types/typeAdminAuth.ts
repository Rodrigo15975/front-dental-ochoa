type FunctionalityAuth = {
  setIsAuth: (isAuth:boolean) => void;
};

export interface StoreAuth extends FunctionalityAuth {
  isAuth: boolean;
}
