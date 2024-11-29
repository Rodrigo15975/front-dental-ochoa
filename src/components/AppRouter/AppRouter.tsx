import { routerProtected, routerPublics } from "@/router";
import { subRouterProtected } from "@/router/subRouterProtected";
import { Route, Routes } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";
import PageNotFound from "@/pages/pageNotFound/PageNotFound";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Aca pones el componente Autenticado , donde solo peuda el auth */}
      
      <Route element={<ProtectedRouter />}>
        {routerProtected.map(({ Componente, path }) => (
          <Route key={path} path={path} element={<Componente />} />
        ))}

      </Route>
      <Route element={<ProtectedRouter subRouter />}>
        {subRouterProtected.map(({ Componente, path }) => (
          <Route key={path} path={`${path}`} element={<Componente />} />
        ))}
      </Route>
      
      {routerPublics.map(({ Componente, path }) => (
        <Route key={path} path={path} element={<Componente />} />
      ))}

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;
