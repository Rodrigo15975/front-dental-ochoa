import { useGetEmpresa } from "@/services/configuracion";
import icon from "../../homeImg/img/ochoa.png";

const HomeFormIcon = () => {
  const { data } = useGetEmpresa();
  const iconLogin = data?.img_logo ? data.img_logo : icon;
  return (
    <div className="animate-fade animate-once flex w-full flex-wrap mt-[2rem] items-center justify-center gap-4 min-h-[20vh]">
      <div className="border border-border_three/50 shadow-md flex-[0_1_10rem] flex items-center justify-center rounded-full min-h-[10rem]">
        <img src={iconLogin} alt="icon" className="h-[6rem] rounded-full object-cover w-[6rem]" />
      </div>
      <h1 className="w-full title-form text-center text-2xl font-robotoSlab_700 mt-[1rem] mb-[2rem]">
        Welcome Admin
      </h1>
    </div>
  );
};

export default HomeFormIcon;
