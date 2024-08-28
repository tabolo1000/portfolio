import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import { Container } from "../../../components/Container";
import { font } from "../../../styles/Common";
import { useWorks } from "./useWorks";
import { AnimatePresence, motion } from "framer-motion"




export const Works = () => {
  const {
    actulaListWork,
    changeFilter,
    menuItems
  } = useWorks()
  return (
    <WorksSection id="portfolio">
      <Container>
        <SectionTitle><span>My Work Experiance</span></SectionTitle>
        <Menu menuItems={menuItems} changeFilter={changeFilter} />
        <FlexWrapper align="start" justify="space-around" wrap="wrap" gap="10px">

          <AnimatePresence>
            {(actulaListWork.length)
              ? (
                actulaListWork.map((el) => (
                  <Work key={el.id}  {...el} />
                ))
              )
              : <NotProjectTitle>Projects are not available at the moment!</NotProjectTitle>
            }
          </AnimatePresence>
        </FlexWrapper>
      </Container>
    </WorksSection>
  );
};

const WorksSection = styled.section`
  position: relative;
  padding: 10px;
`;

const NotProjectTitle = styled.h2`
  padding-bottom: 20px;
  ${font({ Fmax: 30, Fmin: 20 })}
`
