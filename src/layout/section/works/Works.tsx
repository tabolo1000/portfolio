import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import photoWorks from "../../../assets/images/photo/tinySize/indexWorks";
import { Container } from "../../../components/Container";
import { useState } from "react";
import { font } from "../../../styles/Common";
import { useWorks } from "./useWorks";




export const Works = () => {
  const {
    actulaListWork,
    filter,
    changeFilter,
    menuItems
  } = useWorks()
  return (
    <WorksSection>
      <Container>
        <SectionTitle><span>My Work Experiance</span></SectionTitle>
        <Menu menuItems={menuItems} changeFilter={changeFilter} />
        <FlexWrapper align="start" justify="space-around" wrap="wrap" gap="10px">
          {(actulaListWork.length)
            ? (
              actulaListWork.map((el, index) => (
                <Work key={index}  {...el} />
              ))
            )
            : <NotProjectTitle>Projects are not available at the moment!</NotProjectTitle>
          }
        </FlexWrapper>
      </Container>
    </WorksSection>
  );
};

const WorksSection = styled.section`
`;

const NotProjectTitle = styled.h2`
  padding-bottom: 20px;
  ${font({ Fmax: 30, Fmin: 20 })}
`
