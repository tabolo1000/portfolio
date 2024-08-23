import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import photoWorks from "../../../assets/images/photo/tinySize/indexWorks";
import { Container } from "../../../components/Container";

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
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    linkCode: "/trainCode",
    linkDemo: "/trainDeno",
    photo: photoWorks.train,
  },
  {
    title: "phone",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    linkCode: "/phoneCode",
    linkDemo: "/trainDeno",
    photo: photoWorks.phone,
  },
  {
    title: "laptop",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    linkCode: "/laptopCode",
    linkDemo: "/trainDeno",
    photo: photoWorks.laptop,
  },
  {
    title: "micro",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
    linkCode: "/microCode",
    linkDemo: "/trainDeno",
    photo: photoWorks.micro,
  },
];

export const Works = () => {
  return (
    <WorksSection>
      <Container>
        <SectionTitle><span>My Work Experiance</span></SectionTitle>
        <Menu menuItems={menuItems} />
        <FlexWrapper align="start" justify="space-around" wrap="wrap" gap="10px">
          {worksProject.map((el, index) => (
            <Work key={index} {...el} />
          ))}
        </FlexWrapper>
      </Container>
    </WorksSection>
  );
};

const WorksSection = styled.section`
  

`;
