import styled from "styled-components";
import { Tab } from "../tab/Tab";
import { ItemMenu } from "./ItemMenu";

type MenuType = {
  menuItems: Array<string>;
};

export const Menu = ({ menuItems }: MenuType) => {
  return (
    <StyledMenu>
      <ul>
        {menuItems.map((el, index) => (
          <ItemMenu key={index} title={el} />
        ))}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
padding: 40px;

  ul {
    display: flex;
    gap: 30px;
    justify-content: center;

  }
`;
