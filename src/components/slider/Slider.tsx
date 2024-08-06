import styled from "styled-components";

export const Slider = () => {
  return (
    <MaindSlider>
      <Slide>
        <Text> caudillo — «предводитель» или «вождь», официальный титул испанского диктатора Франко) — титул диктатора националистической Испании, название прочих испанских диктаторов, а также диктаторов в ряде стран Латинской Америки, пришедших к власти посредством военного переворота и опирающихся 
            непосредственно на военную силу. </Text>
        <Name> Name</Name>
      </Slide>
    </MaindSlider>
  );
};

const MaindSlider = styled.div`
  border: 1px solid red;
`;

const Slide = styled.div`
    max-width: 500px;
    text-align: center
`;
const Text = styled.p``;
const Name = styled.span``;
