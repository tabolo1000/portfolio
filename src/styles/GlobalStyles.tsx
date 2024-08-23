import { createGlobalStyle } from "styled-components";
import { theme } from "./Themes";





export const GlobalStyle = createGlobalStyle`
*, 
*::after,
*::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box,
}

    body {
  margin: 0;
  height: 100vh;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.color.font};
  line-height: 1.2;
  background-color: ${theme.color.primaryBG};
}

a {
    text-decoration: none;
    color: ${theme.color.font}
}

ul {
    list-style: none;
}

button{
    border-color: unset;
    border: none;
}


section:nth-of-type(even){
    background-color: ${theme.color.secondaryBg};
    h2 > span{
        background-color: ${theme.color.secondaryBg};
    }
}
section:nth-of-type(odd){
    background-color: ${theme.color.primaryBG};
    h2 > span{
        background-color: ${theme.color.primaryBG};
    }
}

p{
    font-weight: 400;
    font-size: 14px;
}

h3{
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.06em;
}

`