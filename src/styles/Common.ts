import { theme } from "./Themes"


type FontListStyle = {
    family?: string;
    weight?: number;
    color?: string;
    lineHeight?: number;
    Fmin: number;
    Fmax: number;
}

interface FontProps {
    (style: FontListStyle): string;
}

export const font: FontProps = ({
    family = "Poppins",
    weight = 600,
    color = `${theme.color.font}`, 
    lineHeight = 1.2,
    Fmin,
    Fmax,
}) => `
    font-family: ${family};
    font-weight: ${weight};
    color: ${color};
    line-height: ${lineHeight};
    font-size: clamp(${Fmin}px, calc((100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px);
`