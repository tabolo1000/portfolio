import styled from "styled-components";
import { theme } from "../../styles/Themes";
import React, { Dispatch, FC, MouseEventHandler, SetStateAction, useCallback } from "react";
import { Filter } from "../../layout/section/works/useWorks";



type ItemMenuProps = {
  title: Filter,
  changeFilter: (filter: Filter) => void;
}


export const ItemMenu: FC<ItemMenuProps> = React.memo(
  ({ title, changeFilter }) => {

    const FilterHandler: MouseEventHandler<HTMLAnchorElement> = useCallback((e) => {
      e.preventDefault();
      changeFilter(title)
    }, [changeFilter, title])

    return (
      <ListItem >
        <Link href={title.toLowerCase()} onClick={FilterHandler}>
          {title}
        </Link>
      </ListItem>
    );
  }
)




const Link = styled.a`
  font-weight: 400;
  font-size: 20px;
`


const ListItem = styled.li`
  position: relative;
  z-index: 0;
  text-shadow: 1px -1px ${theme.color.gradientPrimary};

  &::before {
    content: '';
    display: inline-block;
    height: 10px;
    background-color: ${theme.color.gradientSecondary};
    transform: rotate(-4deg);
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: -5px;
    right: -5px;
    z-index: -1;
  }

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    border-radius: 5px;
    height: 10px;
    left: 5px;
    right: -10px;
    bottom: 50%;
    background-color: ${theme.color.gradientSecondary};
    transform: rotate(-4deg);
    z-index: -1;
    transition: 200ms;
    transform: rotate(-4deg) scale(0);
  }

  &:hover {
    &::after {
      transform: rotate(-4deg) scale(1);
    }
  }
`;