import styled from "styled-components";
import { Tab } from "../../components/tab/Tab";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Themes";

type MenuType = {
    menuItems: Array<string>;
};

export const HeaderMenu = ({ menuItems }: MenuType) => {
    return (
        <StyleHeaderMenu>
            <ListTab>
                <FlexWrapper justify="center" gap="30px">
                    {menuItems.map((el, index) => (
                        <Tab key={index} title={el} />
                    ))}
                </FlexWrapper>
            </ListTab>
        </StyleHeaderMenu>
    );
};

const StyleHeaderMenu = styled.nav`
    
 @media ${theme.tablet} {
    display: none;
    
 }
`

const ListTab = styled.ul`
    
`

