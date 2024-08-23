import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./HeaderMenu";

const menuItems: Array<string> = ["Home", "Portfolio", "Contact"]

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-around" align="center">
          <Logo />
          <HeaderMenu menuItems={menuItems} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}



const StyledHeader = styled.header`
   background-color: #00000047;

   padding: 20px;
   position: fixed;
   left: 0;
   right: 0;
   top: 0;
   z-index: 9999;
`