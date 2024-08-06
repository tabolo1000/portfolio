import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Footer = () => {
  return (
    <MainFooter>
      <FlexWrapper direction="column" align="center">
        <Name>Nik</Name>
        <SocialList>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"twitter"}
                width={40}
                height={40}
                viewBox="0 0 35 31"
              ></Icon>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"codepen"}
                width={40}
                height={40}
                viewBox="0 0 35 31"
              ></Icon>
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink>
              <Icon
                iconId={"facebok"}
                width={40}
                height={40}
                viewBox="0 0 35 31"
              ></Icon>
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2024 Nik Tabala, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </MainFooter>
  );
};

const MainFooter = styled.footer`
  min-height: 10vh;
  background-color: #0f35b21b;
`;
const Name = styled.span``;

const SocialList = styled.ul`
    display: flex;
    gap:20px;
    list-style: none
`;

const SocialLink = styled.a``;

const SocialItem = styled.li``;

const Copyright = styled.small``;
