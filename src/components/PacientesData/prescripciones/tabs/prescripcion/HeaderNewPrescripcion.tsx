import { Typography } from "@/components/Common";

type Props = {
  title: string;
};
const HeaderNewPrescripcion = ({ title }: Props) => {
  return (
    <>
      <div>
        <div className="w-full items-center flex justify-between bg-bg_five/50 p-2  rounded-md shadow-md">
          <Typography className="text-xl text-default" label={`${title}`} />
        </div>
      </div>
    </>
  );
};

export default HeaderNewPrescripcion;
