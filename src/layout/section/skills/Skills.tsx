import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { SkillBox, SkillType } from "./skill/SkillBox";
import { Container } from "../../../components/Container";
import { Bounce} from "react-awesome-reveal";

const skills: Array<SkillType> = [
  {
    iconId: "HTML",
    title: "HTML",
    description: `Франси́ско Паули́но Эрменехи́льдо Тео́дуло Фра́нко Баамо́нде — испанский военный и государственный деятель, каудильо
       Испании в 1939—1975 годах. Генералиссимус. Был одним из организаторов военного переворота 1936 года, который
       привёл к кровопролитной гражданской войне между республиканцами и националистами.`,
  },
  {
    iconId: "CSS",
    title: "CSS",
    description: `Франси́ско Паули́но Эрменехи́льдо Тео́дуло Фра́нко Баамо́нде — испанский военный и государственный деятель, каудильо
       Испании в 1939—1975 годах. Генералиссимус. Был одним из организаторов военного переворота 1936 года, который
       привёл к кровопролитной гражданской войне между республиканцами и националистами.`,
  },
  {
    iconId: "git",
    title: "git",
    description:
      `Франси́ско Паули́но Эрменехи́льдо Тео́дуло Фра́нко Баамо́нде — испанский военный и государственный деятель, каудильо
       Испании в 1939—1975 годах. Генералиссимус. Был одним из организаторов военного переворота 1936 года, который
       привёл к кровопролитной гражданской войне между республиканцами и националистами.`,
  },
  {
    iconId: "redux",
    title: "redux",
    description:
      `Франси́ско Паули́но Эрменехи́льдо Тео́дуло Фра́нко Баамо́нде — испанский военный и государственный деятель, каудильо
       Испании в 1939—1975 годах. Генералиссимус. Был одним из организаторов военного переворота 1936 года, который
       привёл к кровопролитной гражданской войне между республиканцами и националистами.`,
  },
  {
    iconId: "github",
    title: "github",
    description:
      `Франси́ско Паули́но Эрменехи́льдо Тео́дуло Фра́нко Баамо́нде — испанский военный и государственный деятель, каудильо
       Испании в 1939—1975 годах. Генералиссимус. Был одним из организаторов военного переворота 1936 года, который
       привёл к кровопролитной гражданской войне между республиканцами и националистами.`,
  },
  {
    iconId: "sass",
    title: "sass",
    description:
      `Франси́ско Паули́но Эрменехи́льдо Тео́дуло Фра́нко Баамо́нде — испанский военный и государственный деятель, каудильо
       Испании в 1939—1975 годах. Генералиссимус. Был одним из организаторов военного переворота 1936 года, который
       привёл к кровопролитной гражданской войне между республиканцами и националистами.`,
  },
  {
    iconId: "react",
    title: "react",
    description:
      `Франси́ско Паули́но Эрменехи́льдо Тео́дуло Фра́нко Баамо́нде — испанский военный и государственный деятель, каудильо
       Испании в 1939—1975 годах. Генералиссимус. Был одним из организаторов военного переворота 1936 года, который
       привёл к кровопролитной гражданской войне между республиканцами и националистами.`,
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
            damping = {.2}
            triggerOnce
            //direction = "top-left"
            duration =  {800}
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
