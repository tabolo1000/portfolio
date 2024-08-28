import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";


const comunication = ["twitter", "codepen", "facebok"]

export const Footer = () => {
  return (
    <MainFooter>
      <FlexWrapper direction="column" align="center">
        <Name>Nik</Name>
        <SocialList>
          {comunication.map(el => (
            <SocialItem key={el}>
              <FlexWrapper justify="center" align="center">
                <SocialLink>
                  <Icon
                    iconId={el}
                    width={20}
                    height={20}
                    viewBox="-5 -10 43 40"
                  ></Icon>
                </SocialLink>
              </FlexWrapper>
            </SocialItem>
          ))}
        </SocialList>
        <Copyright>© 2024 Nik Tabala, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </MainFooter>
  );
};

const MainFooter = styled.footer`
  position: relative;
  min-height: 10vh;
  background-color: #0f35b21a;
`;
const Name = styled.span`
  padding-top: 40px;
  letter-spacing: .5em;;
`;

const SocialList = styled.ul`
    display: flex;
    gap:20px;
    list-style: none
`;

const SocialLink = styled.a`

`;

const SocialItem = styled.li`
  margin: 20px 0 30px;
  background-color: #635353d2;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  color:  red;
`;

const Copyright = styled.small``;
