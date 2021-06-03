// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';

// Components
import { Hero } from '../components/Hero';
import { Prologue } from '../components/Prologue';

interface IOpeningPage {
    activeNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>,
    nextNavItem: INavItem,
}

export const OpeningPage: FunctionComponent<IOpeningPage> = (p) => {

    return (
        <div>
            <Hero></Hero>
            <Prologue activeNavItem={p.activeNavItem}></Prologue>
        </div>
    );
}