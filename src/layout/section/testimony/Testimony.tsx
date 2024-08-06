import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";


export const Testimony = () => {
  return (
    <MaindTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <Icon iconId="github" />
      <Slider />
    </MaindTestimony>
  );
};

const MaindTestimony = styled.section`
  min-height: 100vh;
  background-color: #666;
`;
