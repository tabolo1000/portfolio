import styled from "styled-components"

export const Menu = () => {
  return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="Home">Home</a>
                </li>
                <li>
                    <a href="Protfolio">Protfolio</a>
                </li>
                <li>
                    <a href="Contact">Contact</a>
                </li>
            </ul>
        </StyledMenu>
  )
}



const StyledMenu = styled.nav`
    ul{
        display: flex;
        gap: 30px
    }
`