import ContainerData from "@/components/Common/ContainerData/ContainerData";
import FormArchive from "./formArchive/FormArchive";

const Archivos = () => {
  return (
    <>
      <ContainerData className="flex-[0_1_20rem] border border-border_three/30 rounded-xl">
        <div className="border flex justify-center text-text_primary gap-4 p-6 rounded-md shadow-sm min-h-[35rem] w-full bg-default">
          <div className="flex-[0_1_80rem] border rounded-md shadow-md">
            <FormArchive />
          </div>
        </div>
      </ContainerData>
    </>
  );
};

export default Archivos;
