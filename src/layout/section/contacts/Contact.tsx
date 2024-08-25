import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";

export const Contact = () => {
  return (
    <SectionContact>
      <Container>
        <SectionTitle><span>Contact</span></SectionTitle>
        <CotactForm>
          <Field placeholder="Frist Name" />
          <Field placeholder="Second Name" />
          <Field placeholder="message" as={"textarea"} />
          <Button type="submit">Send message</Button>
        </CotactForm>
      </Container >
    </SectionContact>


  )
};

const SectionContact = styled.section`
  
`;

const CotactForm = styled.form`
  max-width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  ${Button}{
    margin-top: 20px;
  }
`;

const Field = styled.input`
  width: 100%;
`;


