import ButtonServices from "./ButtonOpenModalServices";
import InputSearchServices from "./InputSearchServices";

const HeaderTitleServices = () => {
  return (
    <>
      <div className="flex flex-[0_1_20rem]">
        <InputSearchServices />
      </div>
      <div className="flex flex-[0_1_20rem] ">
        <ButtonServices />
      </div>
    </>
  );
};

export default HeaderTitleServices;
