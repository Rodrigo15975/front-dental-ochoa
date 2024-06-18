import { NavLink, useParams } from "react-router-dom";
import { menuPacientesData } from "./linksSidebarPacientesData";
import "./style.css";
import { Typography } from "../Common";
import Avatar from "antd/es/avatar/avatar";
import { BiUser } from "react-icons/bi";
import { useGetFindOnePaciente } from "@/services/pacientes/queries";
import { capitalize } from "@/utils";
const AppSidebarPacientesData = () => {
  const { id } = useParams();
  const { data } = useGetFindOnePaciente(id ?? "");

  const nameUpper = capitalize(data?.name ?? "");
  const apellidoUpper = capitalize(data?.apellidos ?? "");
  return (
    <>
      <div className="flex navbar p-4 border shadow-xl border-border_three/50 rounded-md flex-[0_0_22rem] min-h-[] flex-col ">
        <div className="min-h-[23vh] flex flex-col justify-evenly text-text_primary/50 items-center">
          <Avatar
            size={"large"}
            className="bg-bg_six cursor-pointer"
            icon={<BiUser />}
          />
          <Typography
            label={`${nameUpper} ${apellidoUpper}`}
            className="font-robotoSlab_500 border-b pb-2 w-full text-center"
          />
          <Typography
            label={`Registrado: ${data?.fechaRegistro}-${data?.horaRegistro} `}
            className="font-robotoSlab_500"
          />
        </div>
        <div className="bg-default flex h-full min-h-[35rem] rounded-lg flex-col p-2 border ">
          <div className="flex flex-col gap-4 sticky top-4 ">
            {menuPacientesData.map((link, index) => (
              <NavLink
                className={
                  "flex text-text_secondary border font-robotoSlab_500 border-border_three/5 hover:shadow-none transition hover:border-none hover:bg-bg_six/10 items-center justify-center gap-2 h-[2.5rem] rounded-md  shadow-sm w-full"
                }
                key={index}
                to={`${link.path}/${id}`}
              >
                {link.icon}
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppSidebarPacientesData;
