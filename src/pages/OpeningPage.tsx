// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';

// Components
import { Hero } from '../components/Hero';
import { Prologue } from '../components/Prologue';
import { NextPage } from '../components/NextPage';

interface IOpeningPage {
    activeNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>,
    nextNavItem: INavItem,
}

export const OpeningPage: FunctionComponent<IOpeningPage> = (p) => {

    return (
        <StyledOpeningPage>
            <Hero></Hero>
            <Prologue activeNavItem={p.activeNavItem}></Prologue>
            <NextPage setActiveNavItem={p.setActiveNavItem} nextNavItem={p.nextNavItem}/>
        </StyledOpeningPage>
    );
}

const StyledOpeningPage = styled.div`
    padding-bottom: 10rem;
`;