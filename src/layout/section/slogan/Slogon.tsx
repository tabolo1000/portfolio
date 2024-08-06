import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Slogan = () => {
  return <MainSlogan>
    <SectionTitle>We live and breathe software development.</SectionTitle>
    <Button>Hire me</Button>
  </MainSlogan>;
};

const MainSlogan = styled.section`
    min-height: 30vh;
    background-color: #cc89141b;
`;
