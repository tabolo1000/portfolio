import './App.css';
import styled from 'styled-components';
import {Sec} from "./components";
import {Button} from "./components/Button/Button";
import { Header } from './layout/header/header';
import { Main } from './layout/section/main/Main';
import { Skills } from './layout/section/skills/Skills';



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
        </div>
    );
}
export default App;

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








