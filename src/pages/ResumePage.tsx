// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem }  from '../data/navbarData';

// Components
import { Epilogue } from '../components/Epilogue';
import { NextPage } from '../components/NextPage';

interface IResumePage {
    activeNavItem: INavItem,
    nextNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>,
}

export const ResumePage: FunctionComponent<IResumePage> = (p) => {

    return (
        <StyledResumePage>
            <Epilogue activeNavItem={p.activeNavItem}/>
            <NextPage nextNavItem={p.nextNavItem} setActiveNavItem={p.setActiveNavItem} />
        </StyledResumePage>
    );
}

const StyledResumePage = styled.div`
    padding: 10rem 0rem;

    @media (max-width: 650px) {
        padding: 2rem 0rem;
    }
`;