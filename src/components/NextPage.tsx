// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';

interface INextPage {
    nextNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>
}

export const NexPage: FunctionComponent<INextPage> = (p) => {
    return (
        <div>
            <h1>This is the next page</h1>
        </div>
    )
}