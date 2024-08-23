import styled from "styled-components";
import { theme } from "../../styles/Themes";

export const ItemMenu = ({ title }: { title: string }) => {
  return (
    <ListItem>
      <Link href={title.toLowerCase()}>
        {title}
      </Link>
    </ListItem>
  );
};




const Link = styled.a`
  font-weight: 400;
  font-size: 20px;
`


const ListItem = styled.li`
  position: relative;
  z-index: 0;
  text-shadow: 1px -1px ${theme.color.gradientPrimary};
  
  &::before{
    content: "";
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

  &:hover{
    &::after{
      content: "";
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
    }
  }
    
`