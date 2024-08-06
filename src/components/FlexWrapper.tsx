import styled from "styled-components";

type DirectionType = "row-reverse" | "colomn" | "colomn-reverse";
type JustifyType = "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
type WrapType = "wrap" | "wrap-reverse";
type AlignType = "center" | "start" | "end";



type FlexWrapperPropsType = {
    direction?: DirectionType,
    justify?: JustifyType,
    wrap?: WrapType,
    align?: AlignType,
    gap?: string,
}


export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    flex-wrap:  ${props => props.wrap || "no-wrap"};
    align-items:  ${props => props.align || "stretch"};
    gap:  ${props => props.gap || "0px"};
`



