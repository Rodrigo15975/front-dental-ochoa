import Layout from "@/Layout/Layout";
import { storeAuth } from "@/store/auth";
import { PathsPublic } from "@/router/enum/routerPaths";

import { Navigate, Outlet, useLocation } from "react-router-dom";
import { FC } from "react";
import LayoutSubRouter from "@/Layout/LayoutSubRouter";

type PropsProtectedRouter = {
  subRouter?: boolean;
};

const ProtectedRouter: FC<PropsProtectedRouter> = ({ subRouter }) => {
  const location = useLocation();
  const { isAuth } = storeAuth();

  if (isAuth && subRouter)
    return (
      <Layout>
        <LayoutSubRouter>
          <Outlet />
        </LayoutSubRouter>
      </Layout>
    );

  if (isAuth)
    return (
      <Layout>
        <Outlet />
      </Layout>
    );

  return (
    <Navigate
      to={PathsPublic.INICIO}
      replace={true}
      // Obtiene el valor de la ubicacion de donde proviene antes de redireccionarlo
      state={{ from: location }}
    />
  );
};

export default ProtectedRouter;
