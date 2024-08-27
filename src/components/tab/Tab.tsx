import styled from "styled-components";
import { theme } from "../../styles/Themes";

export const Tab = ({ title }: { title: string }) => {
  return (
    <ListItem>
      <Link href={title.toLowerCase()}>
        {title}
        <Mask>
          <span>{title}</span>
        </Mask>
        <Mask>
          <span>{title}</span>
        </Mask>
      </Link>
    </ListItem>
  );
};




const Link = styled.a`
  font-weight: 400;
  font-size: 20px;
  color: transparent;
`

const Mask = styled.span`
position: absolute;
top: 0;
left: 0;
display: inline-block;
height: 50%;
overflow-y: hidden;
color: ${theme.color.font};


& + & {
  top: 50%;
  span {
    display: inline-block;
    transform: translateY(-50%);
  }
}
`

const ListItem = styled.li`
  position: relative;
  &::before{
    content: "";
    display: inline-block;
    height: 2px;
    background-color: ${theme.color.font}; 
    

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
  }

  &:hover{
    &::before {
      transform: scale(1)
    }  
    ${Mask}{
      transition: 200ms ease-in;
      transform: skewX(12deg) translateX(2px);
      & + ${Mask}{
      transform: skewX(12deg) translateX(-2px);
      
    }
    }    
  }
    
`