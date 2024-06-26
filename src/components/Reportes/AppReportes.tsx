import { TbReportSearch } from "react-icons/tb";
import DashboardHeader from "../Dashboard/HeaderDashboard";
import Reportes from "./Reportes";

const AppReportes = () => {
  return (
    <section className="w-full ">
      <DashboardHeader
        icon={<TbReportSearch className="text-bg_six" />}
        title="Reportes"
      />
      <div className="w-full px-8">
        <Reportes />
      </div>
    </section>
  );
};

export default AppReportes;
