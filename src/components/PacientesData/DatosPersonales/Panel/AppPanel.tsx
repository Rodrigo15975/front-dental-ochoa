import { Title } from "@/components/Common";
import ContainerData from "@/components/Common/ContainerData/ContainerData";
import AppForm from "../Form/AppForm";

const AppPanel = () => {
  return (
    <>
      <ContainerData className="flex-[0_1_90rem] border border-border_three/30 rounded-xl">
        <div className="w-full bg-default p-4 rounded-md shadow-sm">
          <div className="mb-2 border-border_three/20 border-b">
            <Title label="Datos Personales" type="h2" className="bg-bg_six/35 rounded-md  font-robotoSlab_600 flex items-center justify-center max-w-[20rem] mb-3 text-default h-[3rem]" />
          </div>
          <div>
            <AppForm />
          </div>
        </div>
      </ContainerData>
    </>
  );
};

export default AppPanel;
