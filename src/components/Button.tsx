import styled from "styled-components";
import { theme } from "../styles/Themes";





export const Button = styled.button<{bgc?: string}>`
    border-radius: 10px;
    width: 277px;
    height: 71px;
    font-weight: 400;
    font-size: 25px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    background-image: ${props => 
        (props.bgc)
        ? `linear-gradient( ${theme.color.gradientPrimary}, ${theme.color.successButton});`
        : `linear-gradient( ${theme.color.gradientPrimary}, ${theme.color.gradientSecondary});` 
        };
    color: ${theme.color.font};
    margin: 20px 0;

    &:hover{
        color: #ccc8c8
    }
`