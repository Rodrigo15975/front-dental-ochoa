import { TbReportSearch } from "react-icons/tb";
import DashboardHeader from "../Dashboard/HeaderDashboard";

const AppReportes = () => {
  return (
    <section className="w-full">
      <DashboardHeader
        icon={<TbReportSearch className="text-bg_six" />}
        title="Reportes"
      />
    </section>
  );
};

export default AppReportes;
