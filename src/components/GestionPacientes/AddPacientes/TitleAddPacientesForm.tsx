import { Button, Title } from "@/components/Common";
import storeGestionPaciente from "@/store/storeGestionPacientes/storeGestionPacientes";
import { BiBookHeart } from "react-icons/bi";

const TitleAddPacientesForm = () => {
  const { setOpenFormGestionPaciente } = storeGestionPaciente();

  // const navigate = useNavigate();

  // const openMoreFormularios = () => {
  //   navigate("/gestion-pacientes/add-pacientes");
  // };

  return (
    <div className="w-full flex-[0_1_75rem] flex items-end justify-between mb-[1rem]">
      <Title
        type="h1"
        label="Nuevo Paciente"
        className="flex bg-gradient-to-br from-blue-400 gap-2 items-center to-indigo-400 text-transparent bg-clip-text font-robotoSlab_500 text-3xl"
      >
        <BiBookHeart className="text-text_fourt/50" />
      </Title>
      <div className="flex flex-1 gap-2 justify-end">
        <Button
          className="flex-[0_1_10rem] h-[2.5rem] bg-text_primary text-white  font-robotoSlab_400"
          label="Volver"
          type="button"
          btnDefault
          onClick={setOpenFormGestionPaciente}
        />
      </div>
    </div>
  );
};

export default TitleAddPacientesForm;
