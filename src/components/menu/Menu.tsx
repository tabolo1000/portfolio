import styled from "styled-components";
import { Tab } from "../tab/Tab";

type MenuType = {
  menuItems: Array<string>;
};

export const Menu = ({ menuItems }: MenuType) => {
  return (
    <StyledMenu>
      <ul>
        {menuItems.map((el, index) => (
          <Tab key={index} title={el} />
        ))}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`;
