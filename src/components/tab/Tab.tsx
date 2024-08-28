import styled from "styled-components";
import { theme } from "../../styles/Themes";
import { FC } from "react";
import { Link } from "react-scroll";


type TabProps = {
  title: string,
}


export const Tab: FC<TabProps> = ({ title }) => {
  return (
    <ListItem>
      <LinkTab
        to={`${title.toLowerCase()}`}
        smooth={true}
        offset={-100}
        duration={1000}
        isDynamic={true}
        spy={true}
      >
        {title}
        <Mask>
          <span>{title}</span>
        </Mask>
        <Mask>
          <span>{title}</span>
        </Mask>
      </LinkTab>
    </ListItem>
  );
};



const Mask = styled.span`
position: absolute;
top: 0;
left: 0;
display: inline-block;
height: 50%;
overflow-y: hidden;
color: ${theme.color.font};
transition: ${theme.animation.transition};


& + & {
  top: 50%;
  span {
    display: inline-block;
    transform: translateY(-50%);
  }
}
`

const LinkTab = styled(Link)`
  font-weight: 400;
  font-size: 20px;
  color: transparent;

  &::before{
    content: "";
    display: inline-block;
    height: 2px;
    background-color: ${theme.color.font}; 
    border-radius: 50%;
    

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    
    transform: scale(0);
    transition: ${theme.animation.transition};
  }

  &:hover, &.active{
    &::before {
      transform: scale(1);
      //transition: 2s ease-in;
    }  
    ${Mask}{
      //transition: 2s ease-in;
      transform: skewX(12deg) translateX(2px);
      & + ${Mask}{
      transform: skewX(12deg) translateX(-2px);
      
    }
    }    
  }
  
`


const ListItem = styled.li`
  position: relative;
`