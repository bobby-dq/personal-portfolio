// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

// Components
import { NextPage } from '../components/NextPage';

interface IContactPage {
    activeNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>,
    nextNavItem: INavItem,
}

export const ContactPage: FunctionComponent<IContactPage> = (p) => {

    return (
        <StyledContactPage>
            <NextPage nextNavItem={p.nextNavItem} setActiveNavItem={p.setActiveNavItem} />
        </StyledContactPage>
    );
}

const StyledContactPage = styled.div`
    padding-top: 10rem;
`;