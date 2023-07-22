type BaseIconProps = {
  iconTitle: string
  hex: string
  iconPath: string
  size?: number
  viewBox?: string
  others?: any
}

const BaseIcon = ({
  iconTitle,
  hex,
  iconPath,
  size = 256,
  viewBox = '0 0 256 256',
  ...others
}: BaseIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill={hex}
      {...others}
    >
      <title>{iconTitle}</title>
      <path d={iconPath} />
    </svg>
  )
}

export default BaseIcon
