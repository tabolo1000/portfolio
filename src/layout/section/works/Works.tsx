import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import photoWorks from "../../../assets/images/photo/tinySize/indexWorks";

export type WorkProjectType = {
  title: string;
  description: string;
  linkCode: string;
  linkDemo: string;
  photo: string;
};

const menuItems: Array<string> = ["All", "LANDING PAGE", "REACT", "SPA"];

const worksProject: Array<WorkProjectType> = [
  {
    title: "train",
    description: "some text train",
    linkCode: "/trainCode",
    linkDemo: "/trainDeno",
    photo: photoWorks.train,
  },
  {
    title: "phone",
    description: "some text phone",
    linkCode: "/phoneCode",
    linkDemo: "/trainDeno",
    photo: photoWorks.phone,
  },
  {
    title: "laptop",
    description: "some text laptop",
    linkCode: "/laptopCode",
    linkDemo: "/trainDeno",
    photo: photoWorks.laptop,
  },
  {
    title: "micro",
    description: "some text micro",
    linkCode: "/microCode",
    linkDemo: "/trainDeno",
    photo: photoWorks.micro,
  },
];

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>My Work Experiance</SectionTitle>
      <Menu menuItems={menuItems} />
      <FlexWrapper wrap="wrap" gap="10px">
        {worksProject.map((el, index) => (
          <Work key={index} {...el} />
        ))}
      </FlexWrapper>
    </StyledWorks>
  );
};

const StyledWorks = styled.div`
  min-height: 100vh;
  background-color: #bc1ca112;
`;
