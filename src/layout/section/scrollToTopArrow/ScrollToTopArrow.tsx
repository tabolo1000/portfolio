import styled, { keyframes } from "styled-components";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import { theme } from "../../../styles/Themes";
import { useScrollToTopArrow } from "./useScrollToTopArrow";



const options = {
    // your options here, for example:
    duration: 500,
    smooth: true,
};


export const ScrollToTopArrow = () => {
    const {
        hidden,
    } = useScrollToTopArrow()
    return (
        <>
            {
                hidden &&
                <PressArrow
                    onClick={() => animateScroll.scrollToTop(options)}
                >
                    <FaRegArrowAltCircleUp />
                </PressArrow>

            }
        </>

    )
}


const arrowToTop = keyframes`
    100%{
        bottom: 40px
    }
`

const PressArrow = styled.div`
    cursor: pointer;
    position: fixed;
    z-index: 100;
    right: 30px;
    bottom: 30px;
    width: 40px;
    height: 40px;
    z-index: 999999;
    animation: ${arrowToTop} 2s ease infinite alternate forwards;
    svg{
        width: 50px;
        height: 50px;
        color: ${theme.color.gradientPrimary}
    } 
`


