// Packages
import { FunctionComponent, useState } from 'react';
import { generateWorkData } from '../data/workData';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';
import { motion } from 'framer-motion';

// Components
import { PageHeader } from '../components/PageHeader';
import { PageIndicator } from '../components/PageIndicator';
import { WorkItem } from '../components/WorkItem';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

// //Animations
// import { useScroll } from '../styles/useScroll';
// import { loadComponentAnimation } from '../styles/animations';

interface IChapterTwo {
    activeNavItem: INavItem
}

export const ChapterTwo: FunctionComponent<IChapterTwo> = (p) => {
    const [hover, setHover] = useState(false)

    const workData = generateWorkData();

    return (
        <StyledChapterTwo
            onHoverStart={ () => setHover(!hover)}
            onHoverEnd={ () => setHover(!hover)}>
            <PageIndicator activeNavItem={p.activeNavItem} />
            <div className="content-wrapper">
                <PageHeader title={p.activeNavItem.title} hover={hover}></PageHeader>
                <div className="works-wrapper">
                    {workData.map( w => <WorkItem workItem={w} />)}
                </div>
            </div>
        </StyledChapterTwo>
    );
}

const StyledChapterTwo = styled(motion.div)`
    display: flex;
    min-height: 100vh;
    font-family: ${theme.montserrat};
    font-size: ${theme.text};

    .content-wrapper {
        flex: 1 1 66.67%;
    }

    .works-wrapper {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 650px) {
        flex-direction: column;
    }
`;