import styled from "styled-components";
import { Tab } from "../../components/tab/Tab";
import { FlexWrapper } from "../../components/FlexWrapper";

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
 
`

const ListTab = styled.ul`
    
`

