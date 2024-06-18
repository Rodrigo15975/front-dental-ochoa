import { Tooltip } from "antd";
import { FC, PropsWithChildren } from "react";

type PropsTooltip = {
  title: string;
  bgColor?: string;
  className?: string;
  onClick?: () => void;
  position?:
    | "bottom"
    | "bottomLeft"
    | "bottomRight"
    | "topLeft"
    | "topRight"
    | "top"
    | "right"
    | "left"
    | "leftBottom"
    | "leftTop"
    | "rightBottom";
};

const CommonTooltip: FC<PropsWithChildren & PropsTooltip> = ({
  children,
  bgColor,
  title,
  className,
  position,
  onClick,
}) => (
  <Tooltip
    placement={position}
    color={bgColor}
    overlayStyle={{
      fontFamily: `"Roboto Slab", "serif"`,
    }}
    title={title}
  >
    <span onClick={onClick} className={className}>
      {" "}
      {children}
    </span>
  </Tooltip>
);
export default CommonTooltip;
