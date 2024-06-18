import { IRoutePublic } from "./types/typeRouter";
import { PathsPublic } from "./enum/routerPaths";
import { PageHome } from "@/pages";
import PageNetWorkError from "@/pages/networkError/PageNetWorkError";

export const routerPublics: IRoutePublic[] = [
  {
    path: PathsPublic.INICIO,
    Componente: PageHome,
  },
  {
    path: PathsPublic.NETWORKERROR,
    Componente: PageNetWorkError,
  },
];
