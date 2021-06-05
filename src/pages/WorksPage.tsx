// Packages
import { FunctionComponent } from 'react';
import { INavItem } from '../data/navbarData';
import styled from 'styled-components';

// Components
import { NextPage } from '../components/NextPage';
import { ChapterTwo } from '../components/ChapterTwo';

interface IWorksPage {
    activeNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>,
    nextNavItem: INavItem,
}

export const WorksPage: FunctionComponent<IWorksPage> = (p) => {

    return (
        <StyledWorksPage>
            <ChapterTwo activeNavItem={p.activeNavItem}></ChapterTwo>
            <NextPage nextNavItem={p.nextNavItem} setActiveNavItem={p.setActiveNavItem}/>
        </StyledWorksPage>
    );
}

const StyledWorksPage = styled.div`
    padding: 10rem 0rem;

    @media (max-width: 650px) {
        padding: 2rem 0rem;
    }
`;