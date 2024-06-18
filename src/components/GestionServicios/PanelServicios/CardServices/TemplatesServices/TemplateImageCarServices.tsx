import { Avatar } from "antd";
import { MdOutlineMedicalServices } from "react-icons/md";

const TemplateImageCardServices = () => {
  return (
    <>
      <figure className="flex items-center justify-center flex-[0_1_3rem] h-[3rem] rounded-full">
        {/* Va el Icon del medico */}
        <Avatar
          alt="service"
          src=""
          style={{ backgroundColor: "#95ffd6" }}
          icon={<MdOutlineMedicalServices className="text-text_primary/80" />}
        />
      </figure>
    </>
  );
};

export default TemplateImageCardServices;
