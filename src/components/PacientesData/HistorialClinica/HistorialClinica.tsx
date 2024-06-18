import ContainerData from "@/components/Common/ContainerData/ContainerData";
import FormNewHistorialClinica from "./FormNewHistorialClinica/FormNewHistorialClinica";
import HeaderFormHistorialClinica from "./FormNewHistorialClinica/HeaderFormHistorialClinica";
import ListHorialClinica from "./ListHistorialClinica/ListHorialClinica";
import { useEffect } from "react";
import { toast } from "react-toastify";

const HistorialClinica = () => {
  // Define un array de nombres para los checkboxes

  const notificationOptional = () =>
    toast.info("Datos opcionales (Antecedentes)", {
      toastId: "notification",
      autoClose: 4000,
    });

  useEffect(() => {
    notificationOptional();
  }, []);

  return (
    <>
      <div className="flex flex-col w-full gap-4">
        <ContainerData className="w-full">
          <ListHorialClinica />
        </ContainerData>
        <ContainerData className="w-full flex justify-between flex-col flex-[0_1_60rem]">
          <div className="w-full">
            <HeaderFormHistorialClinica />
          </div>
          <div className="w-full  flex-[0_1_60rem]">
            <FormNewHistorialClinica />
          </div>
        </ContainerData>
      </div>
    </>
  );
};

export default HistorialClinica;
