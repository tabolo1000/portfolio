import styled, { css } from "styled-components";
import avatar from "../../../assets/images/photo/tinySize/71ad4c1a7463d236881b4dc4014dfe5f.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Themes";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <MainSection>
      <Container>
        <FlexWrapper align="center" justify="space-around" wrap="wrap">
          <div>
            <Acquaintance>
              <Greeting>Welcome</Greeting>
              <Name>I'm <span>Tabala Nik</span></Name>
              <MainTitle>A Web Developer.</MainTitle>
            </Acquaintance>
            <Button>Download CV</Button>
          </div>
          <PhotoWrapper>
            <Photo src={avatar} alt="avatar" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </MainSection>

  );
};

const squareStyleElement = css`
  content: "";
    position: absolute;
    display: inline-block;
    width: 350px;
    height: 430px;;
    border: 3px double ${theme.color.gradientSecondary};

    z-index: 0;

    @media ${theme.mobile} {
    width: 256px;
    height: 294px;
  }
`

const PhotoWrapper = styled.div`
  position: relative;

  
  &::before{
    ${squareStyleElement}

    top: -20px;
    left: 30px;

    @media ${theme.mobile} {
    left: 10px;
    top: -10px;
  }
  };
  &::after{
    ${squareStyleElement}

    top: 10px;
    left: -10px;
  }

`


const Acquaintance = styled.div`
  padding: 20px 0; 

  
`

const MainSection = styled.section`
  min-height: 100vh;
  display: flex;
`

const Greeting = styled.span`
  font-weight: 300;
  font-size: 25px;
  ${font({
  weight: 300,
  Fmax: 25,
  Fmin: 18
})}
  letter-spacing: 0.36em;
  text-transform: uppercase;

  @media ${theme.mobile} {
    display: block;
    padding-top: 100px;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  object-position: center;
  z-index: 1;

  @media ${theme.mobile} {
    width: 256px;
    height: 294px;
  }
`;

const MainTitle = styled.h1`
  ${font({
  weight: 200,
  Fmax: 19,
  Fmin: 14,
})}
  letter-spacing: 0.01em;
  text-transform: uppercase;

  @media ${theme.tablet} {
    display: block;
    margin-bottom: 40px;
  }
`;

const Name = styled.h4`
  position: relative;
  font-weight: 600;
  ${font({
  weight: 600,
  Fmax: 67,
  Fmin: 28
})};
  z-index: 0;
 span {
    &::before{
    content: "";
    border: 2px solid ${theme.color.gradientPrimary};
    border-radius: 10px;
    display: inline-block;
    width: 60%;
    position: absolute;
    bottom: 2px;
    right: 0;
    z-index: -1;
    transform: rotate(-10deg);
    }
    &::after{
    content: "";
    display: inline-block;
    border: 2px solid ${theme.color.gradientPrimary};
    border-radius: 2px;
    width: 40%;
    position: absolute;
    bottom: -10px;
    right: 5%;
    z-index: -1;
    transform: rotate(-15deg)
  }
  }

  @media ${theme.tablet} {
    line-height: 60px;
  }
`;
