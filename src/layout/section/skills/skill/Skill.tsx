import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"






export const Skill = () => {
    return (
        <StyledSkill>
            <FilterStyled>
                <Icon iconId = "ellipse" width={100} height={100}/>
                <IconStyled>
                    <Icon iconId = "frame" width={40} height={40} viewBox="0 0 35 35" color="yellow"/>
                </IconStyled>
                <SquareStyled></SquareStyled>
                <ProgresStyled></ProgresStyled>
            </FilterStyled>
            <SkillTitle>HTML</SkillTitle>
            <SkillText>SomeText</SkillText>
        </StyledSkill>
    )
}

const ProgresStyled = styled.div`
    border: 5px solid yellow;
    width: 100px;
    height: 100px;
    border-radius: 50%;

    border-right-color: rgba(255, 255, 0, 0);

`

const StyledSkill = styled.div`
    
`

const SkillTitle = styled.h3`
    
`
const SkillText = styled.p`
    
`

const FilterStyled = styled.div`
    position: relative;
    
`

const IconStyled = styled.div`
    position: absolute;
    top:30px;
    left: 30px
`
const  SquareStyled = styled.div`
    width: 40px;
    height: 40px;
    border: 2px solid green;
    position: absolute;
    top: 30px;
    left: 29px;

    transform: rotate(50deg);
`

