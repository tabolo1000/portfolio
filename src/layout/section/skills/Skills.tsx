import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Icon } from "../../../components/icon/Icon"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./skill/Skill"




export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper justify="center" gap="20px">
                <Skill/>    
                <Skill/>
                <Skill/>
            </FlexWrapper>
        </StyledSkills>
    )
}


const StyledSkills = styled.section`
    background-color: #0a303038;
    min-height: 100Vh
`