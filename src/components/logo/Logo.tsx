import styled, { keyframes } from "styled-components"

export const Logo = () => {
  return (
    <Autograph>Tabala Nik</Autograph>
  )
}

const logoA = keyframes`
    100%{
      color: red
    }
`

const Autograph = styled.span`
  font-family: "Alex Brush", system-ui;
  font-weight: 400;
  font-style: normal;
  font-size: 35px;



  animation: ${logoA} 2s ease infinite alternate;
`

