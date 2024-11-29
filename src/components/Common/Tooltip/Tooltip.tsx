import { Tooltip } from 'antd'
import { FC, PropsWithChildren } from 'react'

type PropsTooltip = {
  title: string
  bgColor?: string
  className?: string
  onClick?: () => void
  disabled?: boolean
  position?:
    | 'bottom'
    | 'bottomLeft'
    | 'bottomRight'
    | 'topLeft'
    | 'topRight'
    | 'top'
    | 'right'
    | 'left'
    | 'leftBottom'
    | 'leftTop'
    | 'rightBottom'
}

const CommonTooltip: FC<PropsWithChildren & PropsTooltip> = ({
  children,
  bgColor,
  title,
  className,
  position,
  onClick,
  disabled,
}) => (
  <Tooltip
    placement={position}
    color={bgColor}
    overlayStyle={{
      fontFamily: `"Roboto Slab", "serif"`,
    }}
    title={title}
  >
    <span
      onClick={onClick}
      className={`${className} ${
        disabled ? 'cursor-not-allowed opacity-50' : ''
      }`}
    >
      {children}
    </span>
  </Tooltip>
)
export default CommonTooltip
