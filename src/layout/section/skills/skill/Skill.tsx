import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

export type SkillType = {
  iconId: string;
  title: string;
  description: string;
};

export const Skill = ({ iconId, title, description }: SkillType) => {
  return (
    <StyledSkill>
      <FilterStyled>
        <Icon iconId="ellipse" width={100} height={100} />
        <IconStyled>
          <Icon
            iconId={iconId}
            width={40}
            height={40}
            viewBox="0 0 110 100"
            color="yellow"
          />
        </IconStyled>
        <SquareStyled></SquareStyled>
      </FilterStyled>
      <SkillTitle>{title}</SkillTitle>
      <SkillText>{description}</SkillText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
    box-sizing: border-box;
    width: 32%;
    
    
    text-align: center;
    background-color: white;
    border-radius: 15px;
    min-height: 300px;
    padding: 10px;
`;

const SkillTitle = styled.h3``;

const SkillText = styled.p``;

const FilterStyled = styled.div`
  position: relative;
`;

const IconStyled = styled.div`
  z-index: 2;
  position: absolute;
  top: 30px;
  left: 30px;
`;
const SquareStyled = styled.div`
  z-index: 1;
  background-color: #00f2ff21;
  width: 50px;
  height: 50px;
  border: 2px solid green;
  position: absolute;
  top: 25px;
  left: 25px;

  transform: rotate(50deg);
`;
