// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';

interface INavItemComponent {
    navItem: INavItem;
}

export const NavItem: FunctionComponent<INavItemComponent> = (props) => {

    return (
        <div>
            <p>{props.navItem.title}</p>
            <p>{props.navItem.subTitle}</p>
            <p>{props.navItem.index}</p>
        </div>
    );
} 