import ButtonIcon from "@/components/Common/Button/ButtonIcon";
import { storeUpdateProfile } from "@/store";
import { IoClose } from "react-icons/io5";

const ButtonProfileInformationClose = () => {
  const { setOpenUpdateProfile } = storeUpdateProfile();
  return (
    <>
      <ButtonIcon className="absolute -right-6 -top-8">
        <IoClose
          onClick={setOpenUpdateProfile}
          className="curso-poteiner bg-bg_six/50 hover:bg-bg_six text-5xl text-white rounded-full"
        />
      </ButtonIcon>
    </>
  );
};

export default ButtonProfileInformationClose;
