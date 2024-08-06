import styled from 'styled-components';
import './App.css';
import { Header } from './layout/header/header';
import { Main } from './layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';
import { Works } from './layout/section/works/Works';
import { Testimony } from './layout/section/testimony/Testimony';
import { Contact } from './layout/section/contacts/Contact';
import { Slogan } from './layout/section/slogan/Slogon';
import { Footer } from './layout/footer/Footer';



function App() {
    return (
        <AppStyled className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contact/>
            <Slogan/>
            <Footer/>
        </AppStyled>
    );
}
export default App;


const AppStyled = styled.div`
    
    
    
    
    width: 80%;
    margin: 0 auto;
`

/*const App2 = () => {
    return (
        <div>
            <span style={{color: "#691818"}}>sdffsdf</span>
        </div>
    );
};

export default  {
    App,
    App2,
};*/

/*const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;*/








