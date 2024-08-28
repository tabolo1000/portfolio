import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { useContact } from "./useContact";

export const Contact = () => {
  const {
    send,
    form,
    sendEmail,
  } = useContact()

  return (
    <SectionContact>
      <Container>
        <SectionTitle id="contact"><span>Contact</span></SectionTitle>
        <CotactForm ref={form} onSubmit={sendEmail}>
          <Field required placeholder="Name" name="from_name" />
          <Field required type="Email" placeholder="Email" name="subject" />
          <Field required placeholder="Message" as={"textarea"} name="message" />
          {
            (send)
              ? <Button bgc="green" type="submit">Send message</Button>
              : <Button type="submit">Send message</Button>
          }
        </CotactForm>
      </Container >
    </SectionContact>


  )
};

const SectionContact = styled.section`
  position: relative;
  padding: 10px;
  
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


