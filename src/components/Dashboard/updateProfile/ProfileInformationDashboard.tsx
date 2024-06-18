import { Button, Input, PropsInputOptional } from "@/components/Common";
import { dataInputsInformation } from "./inputDataInformation/inputDataInformation";

import { FC } from "react";
const ProfileInformationDashboard: FC<PropsInputOptional> = ({
  fieldProps,
}) => {
  // Luego tiene que venir datos de un db
  // hacer esto reutilizable
  return (
    <div className="flex flex-wrap h-full p-4">
      <div className="flex min-h-[65vh] gap-8 w-full">
        <div className="flex w-full justify-evenly flex-col">
          {dataInputsInformation.slice(0, 7).map((inputs, index) => (
            <div key={index}>
              <label className="text-inputs-gradients font-robotoSlab_700">
                {inputs.textPlaceHolder}
              </label>
              <Input
                disabled={inputs.disabled}
                reset
                name={inputs.name}
                fieldProps={fieldProps}
                type={inputs.type}
                className={`font-robotoSlab pl-4 text-text_primary border ${
                  inputs.disabled
                    ? "cursor-no-drop text-text_primary/50"
                    : "font-robotoSlab_600"
                } border-border_three/10 mt-2 bg-bg_six/10 h-[2.8rem] rounded-full  w-full`}
                AsComPonente={inputs.Component}
                as={inputs.as}
              />
            </div>
          ))}
        </div>
        <div className="flex w-full justify-evenly flex-col items-center">
          {dataInputsInformation.slice(7, 14).map((inputs, index) => (
            <div className="w-full" key={index}>
              <label className="text-inputs-gradients">
                {inputs.textPlaceHolder}
              </label>
              <Input
                reset
                name={inputs.name}
                fieldProps={fieldProps}
                type={inputs.type}
                className="font-robotoSlab pl-4 text-text_primary border font-robotoSlab_600 border-border_three/10 mt-2 bg-bg_six/10 h-[2.8rem] rounded-full  w-full"
                AsComPonente={inputs.Component}
                as={inputs.as}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 w-full">
        <Button
          type="submit"
          label="Guardar cambios"
          className="w-full border h-[3rem] border-border_three/30 text-default rounded-full bg-bg_six hover:bg-bg_six/50"
        />
      </div>
    </div>
  );
};

export default ProfileInformationDashboard;
