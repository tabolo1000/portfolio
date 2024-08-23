import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Themes";

export type SkillType = {
  iconId: string;
  title: string;
  description: string;
};

export const SkillBox = ({ iconId, title, description }: SkillType) => {
  return (
    <Skill>
      <FilterStyled>
        <IconStyled>
            <Icon
              iconId={iconId}
              width={50}
              height={50}
              viewBox="0 0 110 100"
              color="yellow"
            />
        </IconStyled>
      </FilterStyled>
      <SkillTitle>{title}</SkillTitle>
      <SkillText>{description}</SkillText>
    </Skill>
  );
};

const IconStyled = styled.div`
    position: relative;
    z-index:0;

    &::before{
      content: "";
      width: 80px;
      height: 80px;
      background-color: #4b41416b;
      display: inline-block;
      z-index: -1;
      transform: rotate(45deg) translate(50% , 50%);
      transform-origin: bottom right;
      position: absolute;
      bottom: 50%;
      right: 50%;
      //transform: translate(50%, 50%);
    }

    
`;

const Skill = styled.div`
    box-sizing: border-box;
    width: 32%;
    box-shadow: 10px -5px 10px black;
    
    
    
    text-align: center;
    background-color: ${theme.color.primaryBG};
    border: 2px double ${theme.color.secondaryBg};
    border-radius: 15px;
    min-height: 300px;
    padding: 30px;
`;

const SkillTitle = styled.h3`
  padding: 40px 0 15px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const SkillText = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-align: center;
`;

const FilterStyled = styled.div`
`;



