import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Carousel, ConfigProvider } from 'antd';
import "./slider.css"


export const comment = [
  {
    text: `Caudillo — «предводитель» или «вождь», официальный титул испанского
            диктатора Франк— титул диктатора националистической Испании,
            название прочих испанских диктаторов, а также диктаторов в ряде
            стран Латинской Америки, пришедших к власти посредством военного
            переворота и опирающихся непосредственно на военную силу.`,
    author: "@Francisco Paulino Hermenegildo"
  },
  {
    text: `Caudillo — «предводитель» или «вождь», официальный титул испанского
            диктатора Франк— титул диктатора националистической Испании,
            название прочих испанских диктаторов, а также диктаторов в ряде
            стран Латинской Америки, пришедших к власти посредством военного
            переворота и опирающихся непосредственно на военную силу.`,
    author: "@Francisco Paulino Hermenegildo"
  }
]




export const Slider = () => {
  return (
    <MaindSlider direction="column" align="center" gap="10px">
      <FlexWrapper>
        <ConfigProvider
          theme={{
            components: {
              Carousel: {
                arrowOffset: -30,
                arrowSize: 30,
                dotActiveWidth: 20,
                dotHeight: 10,
                dotWidth: 10,
                dotOffset: 12,

              },
            },
          }}
        >
          <Carousel
            className="carousel"
            easing={"ease-in"}
            speed={2000} draggable
            arrows
            autoplay
          >
            {
              comment.map((el, i) => (
                <Slide key={i}>
                  <Text>
                    {el.text}
                  </Text>
                  <Name>
                    {el.author}
                  </Name>
                </Slide>
              ))
            }
          </Carousel>
        </ConfigProvider>
      </FlexWrapper>
    </MaindSlider >
  );
};

const MaindSlider = styled(FlexWrapper)`
  max-width: 500px;

 
`;

const Slide = styled.div`
  color: white;
  text-align: center;
`;
const Text = styled.p`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
   user-select: none;
   cursor: grab;
`;
const Name = styled.span`
  display: inline-block;
  padding: 15px 0 35px;
`;

