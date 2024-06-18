import { m } from "framer-motion";
import AppHomeForm from "./homeForm/AppHomeForm";
import HomeUpdateButton from "./homeImg/HomeImgButton";
import { useGetEmpresa } from "@/services/configuracion";
import imgDefault from "@/img/434652954_972260498242997_1647139698100792044_n.png";
const AppHome = () => {
  const { data } = useGetEmpresa();
  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      style={{
        backgroundImage: data?.img_consultorio
          ? `url(${data.img_consultorio})`
          : `url(${imgDefault})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
      exit={{ opacity: 0 }}
      className="bg-default m-auto flex items-center min-h-screen justify-start "
    >
      <AppHomeForm />
      <HomeUpdateButton />
    </m.main>
  );
};

export default AppHome;
