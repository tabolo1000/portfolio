import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { IconStyled } from "../skills/skill/SkillBox";

export const Testimony = () => {
  return (
    <MaindTestimony>
      <Container>
        <SectionTitle><span>Testimony</span></SectionTitle>
        <FlexWrapper direction="column" align="center">
          <IconBox>
            <IconStyled>
              <Icon iconId="github" width={40} height={40} viewBox="0 0 110 100" />
            </IconStyled>
          </IconBox>
          <Slider />
        </FlexWrapper>
      </Container>
    </MaindTestimony>
  );
};

const MaindTestimony = styled.section`
`;

const IconBox = styled.div`
  padding: 40px 0 60px;
`
