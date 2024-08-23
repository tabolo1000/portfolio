import styled, { css } from "styled-components";
import avatar from "../../../assets/images/photo/tinySize/71ad4c1a7463d236881b4dc4014dfe5f.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Themes";

export const Main = () => {
  return (
    <MainSection>
      <Container>
        <FlexWrapper align="center" justify="space-around">
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

    z-index: -1;
`

const PhotoWrapper = styled.div`
  position: relative;

  
  &::before{
    ${squareStyleElement}

    top: -20px;
    left: 30px;
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
  border: 2px solid blue;

  display: flex;
`

const Greeting = styled.span`
  font-weight: 300;
  font-size: 25px;
  letter-spacing: 0.36em;
  text-transform: uppercase;
`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  z-index: 0;
`;

const StyledMain = styled.div`
  min-height: 100vh;
 // background-color: #3919574b;
`;

const MainTitle = styled.h1`
  font-weight: 200;
  font-size: 19px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
`;
const Name = styled.h2`
  position: relative;
  font-weight: 600;
  font-size: 67px;
  z-index: 0;
  span{
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
`;
