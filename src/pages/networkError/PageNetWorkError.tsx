import { Button } from "@/components/Common";
import { PathsPublic } from "@/router/enum/routerPaths";
import { useNavigate } from "react-router-dom";

const PageNetWorkError = () => {
  const navigate = useNavigate();
  const backHome = () => navigate(PathsPublic.INICIO);
  return (
    <>
      <div className="bg-gray-200 w-full px-6 md:px-0 h-screen flex items-center justify-center">
        <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
          <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
            Sin Internet
          </p>
          <p className="text-rose-600 font-robotoSlab_600 mt-8 py-2 border-y-2 text-center">
            Ocurrio algo inesperado
          </p>
          <Button
            type="button"
            className="mt-8 w-full h-[3rem] font-robotoSlab_600 bg-bg_six/80 text-default hover:bg-bg_six transition"
            label="Volver a internalo"
            btnDefault
            onClick={backHome}
          />
        </div>
      </div>
    </>
  );
};

export default PageNetWorkError;
