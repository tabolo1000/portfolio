import styled from "styled-components";
import { theme } from "../styles/Themes";
import { font } from "../styles/Common";





// Предполагаем, что ThemeProvider передает тему
export const SectionTitle = styled.h2<{ backgroundColor?: string }>`
  position: relative;
  padding: 30px 15%;
  text-align: left;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  z-index: 0;
  ${font({
    weight: 600,
    Fmax: 36,
    Fmin: 30,
  })}

  span {
    padding: 0 20px;
    z-index: 1;
  }

  &::before {
    position: absolute;
    content: "";
    display: inline-block;
    border-radius: 5px;
    border: 2px solid ${theme.color.gradientPrimary};
    width: 100%;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
  }
`;