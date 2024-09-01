import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { SkillBox, SkillType } from "./skill/SkillBox";
import { Container } from "../../../components/Container";
import { Bounce } from "react-awesome-reveal";

const skills: Array<SkillType> = [
  {
    iconId: "HTML",
    title: "HTML",
    description: `HTML (HyperText Markup Language)
     is the standard markup language used to create and 
     structure content on the web. This language allows 
     the combining and formatting of texts, images, videos, 
     and other elements for display in web browsers.`,
  },
  {
    iconId: "CSS",
    title: "CSS",
    description: `CSS (Cascading Style Sheets) is a stylesheet 
    language used to describe the presentation of a document
     written in HTML or other markup languages. It is a cornerstone
      technology of the World Wide Web, alongside HTML and JavaScript.
       CSS enables the separation of presentation and content, 
       including layout, colors, and fonts. This separation can improve
       content accessibility, provide more flexibility and control
        in the specification of presentation characteristics, 
    and reduce complexity and repetition in the structural content.`,
  },
  {
    iconId: "git",
    title: "git",
    description:
      `Git is a distributed version control system designed 
      to handle everything from small to very large projects 
      with speed and efficiency. It was created by Linus Torvalds 
      in 2005 to support the development of the Linux kernel, 
      with other kernel developers contributing to its initial 
      development.`,
  },
  {
    iconId: "redux",
    title: "redux",
    description:
      `Redux is a predictable state container for 
      JavaScript apps, often used with libraries
       such as React, but it can be used with any 
       other JavaScript library or framework. It helps 
       you manage the state of your application in a predictable 
       way by centralizing the state in a single store. This makes
       it easier to reason about your application and enables powerful
        features like undo/redo, state persistence, and more.`,
  },
  {
    iconId: "github",
    title: "github",
    description:
      `GitHub is a web-based platform that uses Git, the distributed version control system, for version control of code. It provides a collaborative environment where multiple developers can work on a project simultaneously. GitHub has become an essential tool for both individual developers and teams in the software industry.`,
  },
  {
    iconId: "sass",
    title: "sass",
    description:
      `Sass (Syntactically Awesome Stylesheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). It provides mechanisms such as variables, nested rules, mixins, inheritance, and more, which can make writing CSS easier and more maintainable.`,
  },
  {
    iconId: "react",
    title: "react",
    description:
      `React is a popular JavaScript library for building user interfaces, particularly for single-page applications where you need a fast interaction with the user. It was developed by Facebook and is maintained by Facebook and a community of individual developers and companies.`,
  },
  {
    iconId: "Storybook",
    title: "Storybook",
    description:
      `Storybook is an open-source tool for developing UI components in isolation for React, Vue, Angular, and many other frameworks. It allows developers to create and organize components independently from the main app and showcase them in an interactive development environment. This is particularly useful in building and testing UI components without having to worry about application specifics or dependencies.`,
  },
  {
    iconId: "JavaScript",
    title: "JavaScript",
    description:
      `JavaScript is a versatile, high-level programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over the years, JavaScript has evolved from a simple client-side scripting language for making web pages interactive to a robust language used in server-side programming, mobile app development, and more.`,
  },
];

export const Skills = () => {
  return (
    <SkillsSection>
      <Container>
        <SectionTitle> <span >My Skills</span></SectionTitle>
        <SkillsBox>
          <Bounce
            cascade
            damping={.2}
            triggerOnce
            //direction = "top-left"
            duration={800}
          >
            {skills.map((el, index) => (
              <SkillBox
                key={index}
                iconId={el.iconId}
                title={el.title}
                description={el.description}
              />
            ))}
          </Bounce>
        </SkillsBox>
      </Container>
    </SkillsSection>
  );
};


const SkillsBox = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, auto));
  //grid-template-rows: repeat( 3, 1fr);
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 10px;
  grid-auto-flow: row;


  //wrap
  //gri
`

/*<FlexWrapper justify="space-between" gap="20px" wrap="wrap"></FlexWrapper>
</FlexWrapper>*/



const SkillsSection = styled.section`
  position: relative;
  padding: 10px;
`;
