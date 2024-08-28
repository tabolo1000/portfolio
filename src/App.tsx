import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';
import { Works } from './layout/section/works/Works';
import { Testimony } from './layout/section/testimony/Testimony';
import { Contact } from './layout/section/contacts/Contact';
import { Slogan } from './layout/section/slogan/Slogon';
import { Footer } from './layout/footer/Footer';
import { Particles_my } from './layout/section/particles_my/Particles_my';
import { ScrollToTopArrow } from './layout/section/scrollToTopArrow/ScrollToTopArrow';



function App() {
    return (
        <AppStyled >
            <Particles_my />
            <Header />
            <Main />
            <Skills />
            <Works />
            <Testimony />
            <Contact />
            <Slogan />
            <Footer />
            <ScrollToTopArrow />
        </AppStyled>
    );
}
export default App;


const AppStyled = styled.div`
    margin: 0 auto;
`









