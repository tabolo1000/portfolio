import styled from "styled-components";
import iconsSprite from '../../assets/images/icon/sprite/sprite.svg';

type IconType = {
  iconId: string
  width?: number
  height?: number
  viewBox?: string
  color?: string
}

export const Icon = (
  { iconId,
    width,
    height,
    viewBox,
    color,
  }: IconType
) => {
  return (
    <div >
      <svg
      
        style={{ display: "inline-block" }}
        width={width || "282"}
        height={height || "281"}
        viewBox={viewBox || "0 0 282 281"}
        fill={color || "none"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <use xlinkHref={`${iconsSprite}#${iconId}`} />
      </svg>
    </div>
  )
}