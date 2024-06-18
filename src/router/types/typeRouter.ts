import { ComponentType } from "react";
import {
  PathsProtected,
  PathsPublic,
  PathsSubRoutingProtected,
} from "../enum/routerPaths";

export interface IRoutePublic {
  path: PathsPublic;
  Componente: ComponentType;
}

export interface IRouterProtected {
  Componente: ComponentType;
  path: PathsProtected | PathsSubRoutingProtected | string;
}
