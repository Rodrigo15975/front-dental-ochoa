import { Avatar } from "antd";
import { ProgressSpinner } from "primereact/progressspinner";
import { FaHome } from "react-icons/fa";

const LoadingForm = () => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-white z-[200]">
        <div className="flex flex-col justify-center items-center gap-4">
          {/* aca ira el logo de la empresa */}
          <Avatar icon={<FaHome />} size={100} src="" />
          <ProgressSpinner
            style={{ width: "70px", height: "70px" }}
            strokeWidth="8"
            fill="var(--surface-ground)"
            animationDuration=".5s"
          />
          <p className="font-robotoSlab_600 text-xl">Loading....</p>
        </div>
      </div>
    </>
  );
};

export default LoadingForm;
