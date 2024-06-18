type FuncionalitySidebarMobile = {
  setToggle: () => void;
  setCollapse: () => void;
  setScreenMobile: () => void;
};

export interface StoreSidebarMobile extends FuncionalitySidebarMobile {
  toggle: boolean;
  collapse: boolean;
  screenMobile: boolean;
}
