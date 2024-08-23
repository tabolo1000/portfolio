import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";

export const Slogan = () => {
  return (
    <SloganSection>
      <Container>
        <h2>We live and breathe software development!</h2>
        <Button>Hire me</Button>
      </Container>
    </SloganSection>
  )
};

const SloganSection = styled.section`
   ${Button}{
    display: block;
    margin: 0 auto;
   } 
   h2{
    text-align: center;
    padding: 100px 0 50px;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
   }
`;
