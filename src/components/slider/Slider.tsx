import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

export const Slider = () => {
  return (
    <MaindSlider direction="column" align="center" gap = "10px">
      <FlexWrapper>
        <Slide>
          <Text>
            {" "}
            Caudillo — «предводитель» или «вождь», официальный титул испанского
            диктатора Франко) — титул диктатора националистической Испании,
            название прочих испанских диктаторов, а также диктаторов в ряде
            стран Латинской Америки, пришедших к власти посредством военного
            переворота и опирающихся непосредственно на военную силу.
          </Text>
          <Name>@Francisco Paulino Hermenegildo</Name>
        </Slide>
      </FlexWrapper>
      <Pagination>
        <span></span>
        <span></span>
        <span></span>
      </Pagination>
    </MaindSlider>
  );
};

const MaindSlider = styled(FlexWrapper)`
  border: 1px solid red;
  max-width: 500px;
`;

const Slide = styled.div`
  text-align: center;
`;
const Text = styled.p``;
const Name = styled.span``;
const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    background-color: #e40c0c;
  }
`;
