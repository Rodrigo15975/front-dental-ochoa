import { Button } from "@/components/Common";
import { BiLogIn } from "react-icons/bi";
const HomeFromButton = () => {
  return (
    <div className="flex flex-col gap-8 pb-8 mb-[2rem]">
      <p className="pl-[1rem] mt-[1rem] font-robotoSlab_500 underline underline-offset-4 cursor-pointer text-secondary/30">
        Olvido la contraseña
      </p>
      <Button
        label="Login"
        type="submit"
        className="flex mt-[1.5rem] hover:bg-bg_six/50 border text-default shadow-md hover:shadow-none transition font-robotoSlab_500 text-xl items-center justify-center gap-2 bg-bg_six rounded-full w-full h-[3rem]"
      >
        {<BiLogIn className="text-default text-2xl" />}
      </Button>
    </div>
  );
};

export default HomeFromButton;
