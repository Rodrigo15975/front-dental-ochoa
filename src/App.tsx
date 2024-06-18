import "./App.css";
import { AppRouter } from "./components/AppRouter";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    // Si lo pones aca, tambien se notara en el login
    // mejor pongo en donde esta las rutas protegidas protectedRouter
    <>
      <AppRouter />
      <ToastContainer
        autoClose={1500}
        position="top-center"
        draggable={true}
        toastClassName={
          "font-robotoSlab font-robotoSlab_500  text-[1.1rem] flex-[0_1_35rem] "
        }
        className={"flex justify-center text-center w-full"}
      />
    </>
  );
}

export default App;
