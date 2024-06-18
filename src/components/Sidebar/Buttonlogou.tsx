import { MdOutlineArrowBackIos } from "react-icons/md";
import { Button } from "../Common";
import CommonTooltip from "../Common/Tooltip/Tooltip";

type Props = {
  onClick: () => void;
};

const Buttonlogout = ({ onClick }: Props) => {
  return (
    <>
      <div className="w-full">
        <CommonTooltip title="Cerrar Sesión">
          <Button
            type="button"
            className="w-full flex active p-3 items-center justify-center "
            onClick={onClick}
          >
            <MdOutlineArrowBackIos className="text-2xl bg-default rounded-full text-text_primary" />
          </Button>
        </CommonTooltip>
      </div>
    </>
  );
};

export default Buttonlogout;
