import { PropsInputOptional, Typography } from '@/components/Common'
import { FC } from 'react'
import { inpustNewHistorialClinica } from '../inputsNameNewHistorialClinica'
const Antecedentes: FC<PropsInputOptional> = ({ fieldProps }) => {
  return (
    <>
      <Typography
        className="bg-clinica w-full rounded-md text-default text-xl flex items-center h-[3rem] p-2"
        label="Antecedentes"
      />

      <div className=" bg-default p-4 my-4 rounded-md shadow-sm px-[1rem] flex flex-col gap-4 mt-4 ">
        {inpustNewHistorialClinica.slice(3, 15).map((inputs, index) => (
          <div
            key={`index-chechbox-${index}`}
            className="w-full rounded-md p-2 flex items-center shadow-md border hover:text-default text-text_primary hover:shadow-none hover:bg-bg_six  transition bg-bg_six/10"
          >
            <label
              className="flex-[0_1_25rem] font-robotoSlab_500"
              htmlFor={inputs.name}
            >
              {inputs.textPlaceHolder}
            </label>
            <input
              {...fieldProps(inputs.name)}
              name={inputs.name}
              type={inputs.type}
              className="border-none hover:bg-bg_three transition cursor-pointer shadow-lg outline-1 outline-dashed rounded-md h-[2rem] w-[2rem]"
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Antecedentes
