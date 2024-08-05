import styled from "styled-components";


type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    wrap?: string 
    align?: string
    gap?: string
}


export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    justify-content: ${props => props.justify || "flex-start"};
    flex-wrap:  ${props => props.justify || "no-wrap"};
    align-items:  ${props => props.align || "stretch"};
    gap:  ${props => props.gap || "0px"};
`



