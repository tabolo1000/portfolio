import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Themes";

export const Slider = () => {
  return (
    <MaindSlider direction="column" align="center" gap = "10px">
      <FlexWrapper>
        <Slide>
          <Text>
            Caudillo — «предводитель» или «вождь», официальный титул испанского
            диктатора Франк— титул диктатора националистической Испании,
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
  max-width: 500px;
`;

const Slide = styled.div`
  text-align: center;
`;
const Text = styled.p`
`;
const Name = styled.span`
  display: inline-block;
  padding: 15px 0 35px;
`;
const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    background-color: #8a7f7fdf;
    border-radius: 50%;
  }
  span:hover{
    width: 20px;
    background-color: ${theme.color.gradientSecondary};
    border-radius: 25%;
  }
`;
