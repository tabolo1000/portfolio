import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

const menuItems: Array<string> = ["Home", "Portfolio", "Contact"]

export const Header = () => {
  return (
    <StyledHeader>
        <Logo/>
        <Menu menuItems={menuItems}/>
    </StyledHeader>
  )
}



const StyledHeader = styled.header`
   background-color: blue;
   display: flex;
   justify-content: space-around;
   align-items: center;
`