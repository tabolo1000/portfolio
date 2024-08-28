import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Themes";

export const Slogan = () => {
  return (
    <SloganSection>
      <Container>
        <h2>We live and breathe software development!</h2>
      </Container>
    </SloganSection>
  )
};

const SloganSection = styled.section`
   position: relative;
   min-height: 300px;
   
   ${Button}{
    display: block;
    margin: 0 auto;
   } 
   h2{
    text-align: center;
    padding: 100px 0 50px;
    letter-spacing: 0.05em;
    text-transform: capitalize;

    ${font({
  Fmax: 36,
  Fmin: 24,
  weight: 600,
})

  }
  @media ${theme.tablet} {
    padding-top: 50px;
  }


   }
   
`;
