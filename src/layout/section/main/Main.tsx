import styled from "styled-components";
import avatar from "../../../assets/images/photo/tinySize/71ad4c1a7463d236881b4dc4014dfe5f.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <section>
      <FlexWrapper align="center" justify="space-around">
        <div>
          <span>Welcome</span>
          <Name>I'm Tabala Nik</Name>
          <MainTitle>A Web Developer.</MainTitle>
          <button>Download CV</button>
        </div>
        <Photo src={avatar} alt="avatar" />
      </FlexWrapper>
    </section>
  );
};

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #3919574b;
`;

const MainTitle = styled.h1``;
const Name = styled.h2``;
