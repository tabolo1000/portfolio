import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";

export const Contact = () => {
  return <MaindContact>
    <SectionTitle>Contact</SectionTitle>
    <CotactForm>
      <Field placeholder="name"/>
      <Field placeholder="des"/>
      <Field placeholder="message" as={"textarea"}/>
      <Button type="submit">Send message</Button>
    </CotactForm>
  </MaindContact>;
};

const MaindContact = styled.section`
  min-height: 300px;
  background-color: #9120204d;
`;

const CotactForm = styled.form`
  max-width: 500px;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`;

const Field = styled.input`
  
`;


