import styled, { css } from "styled-components";
import { Tab } from "../../components/tab/Tab";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Themes";
import { useState } from "react";

type MenuType = {
    menuItems: Array<string>;
};

export const MobileHeaderMenu = ({ menuItems }: MenuType) => {
    const [open, isOpen] = useState(false);
    return (
        <StyleHeaderMenu>
            <ListTab isOpen = {open}>
                <FlexWrapper align="center" justify="center" gap="30px" direction="column">
                    {menuItems.map((el, index) => (
                        <Tab key={index} title={el} />
                    ))}
                </FlexWrapper>
            </ListTab>
            <BurggerButton onClick={() => isOpen(!open)} isOpen = {open}></BurggerButton>
        </StyleHeaderMenu>
    );
};

const StyleHeaderMenu = styled.nav`
    position: relative;
    display: none;
    @media ${theme.tablet} {
        display: block;
    }
   


`

const BurggerButton = styled.span<{isOpen: boolean}>`
    position: relative;
    display: inline-block;
    width: 32px;
    height: 5px;
    background-color: ${theme.color.font};
    &::before{
        content: "";
        position: absolute;
        display: inline-block;
        width: 35px;
        height: 5px;
        background-color: ${theme.color.font};
        top: -10px;
    }
    &::after{
        content: "";
        position: absolute;
        display: inline-block;
        width: 35px;
        height: 5px;
        background-color: ${theme.color.font};
        top: 10px;
    }
    ${props => props.isOpen && css<{isOpen: boolean}>`
        z-index: 99999;
        background-color: transparent;
        border: 4px dotted #924949a4;
        box-shadow: 2px 2px 10px red, -4px -4px 10px blue, 2px -2px 10px yellow, -2px 2px 15px black ;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        
        &::before{
            transform: rotate(45deg) translate(-50%, 50%);
            transform-origin: top left;
            border-radius: 5px;
            left: 55%;
            top: 45%;

        }
        &::after{
            transform: rotate(-55deg) translate(-50%, 50%);
            transform-origin: top left;
            
            top: 45%;
            left: 45%;
            border-radius: 5px;
        }
    `}

`

const ListTab = styled.ul<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(8px);
    z-index: 99999;

    ${props => !props.isOpen && css<{isOpen: boolean}>`
        display: none;
    `}

    li{
        position: relative;
        &::after{
            content: "";
            position: absolute;
            display: inline-block;
            bottom: -5px;
            left: -10px;
            right: -10px;
            border: 2px groove ${theme.color.font};
            border-radius: 50% 50% 0 0;
            
        }
    }
`