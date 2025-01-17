import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import { useState } from "react";
import FormPrescripcion from "../tabs/prescripcion/FormNewPrescripcion";
import FormReceta from "../tabs/receta/FormReceta";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const OptionsPrescripciones = () => {
  const [datos] = useState({
    ["Prescripción"]: <FormPrescripcion />,
    ["Receta médica"]: <FormReceta />,
  });

  return (
    <>
      <TabGroup defaultIndex={0}>
        <TabList className="flex space-x-1 rounded-xl bg-black/10 active p-1">
          {Object.keys(datos).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full transition  rounded-lg py-2.5 text-sm font-robotoSlab_600  leading-5 outline-none",
                  "ring-white/60 ring-offset-2  ",
                  selected
                    ? "bg-white text-blue-700"
                    : "text-blue-100  hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-2 pb-4 bg-default">
          {Object.values(datos).map((children, index) => (
            <TabPanel key={`tab-${index}`}>{children}</TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </>
  );
};

export default OptionsPrescripciones;
