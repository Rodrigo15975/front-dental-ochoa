import { Typography } from "@/components/Common";
import { useGetId, useGetProfile } from "@/services/profile/queries";

const TitleProfileUpdateDashboard = () => {
  const userId = useGetId();
  const { data } = useGetProfile(userId.data?.id ?? "", userId.data?.role);

  return (
    <>
      <Typography
        className="text-white font-robotoSlab_500 h-[3rem] text-xl flex items-center"
        label="Actualizando Información"
      />
      <Typography
        className="text-default font-robotoSlab_600"
        label={`Role: ${data?.role ?? ""}`}
      />
    </>
  );
};

export default TitleProfileUpdateDashboard;
