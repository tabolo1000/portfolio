import styled from "styled-components";
import { ItemMenu } from "./ItemMenu";
import { Filter } from "../../layout/section/works/useWorks";


type MenuType = {
  menuItems: Array<Filter>;
  changeFilter: (filter: Filter) => void
};

export const Menu = ({ menuItems, changeFilter }: MenuType) => {
  return (
    <StyledMenu>
      <ul>
        {menuItems.map((el, index) => (
          <ItemMenu key={index} title={el} changeFilter={changeFilter} />
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
    text-align: center;
  }
`;
