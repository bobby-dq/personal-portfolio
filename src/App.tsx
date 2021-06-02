// Packages
import { useState } from 'react';
import { INavItem, generateNavbarData } from './data/navbarData';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { useLocation, Switch, Route } from 'react-router-dom';

// Components
import { Navbar } from './components/Navbar';
import { Slider } from './components/Slider';
import { SlidingMenu } from './components/SlidingMenu';

// Styles
import { GlobalStyle } from './styles/globalStyle';

// Pages
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { OpeningPage } from './pages/OpeningPage';
import { ResumePage } from './pages/ResumePage';
import { WorksPage } from './pages/WorksPage';

function App() {
	// Data
	const navbarData:INavItem[] = generateNavbarData();
	const location = useLocation();

	// States
	const [activeNavItem, setActiveNavItem] = useState(navbarData[0]);
	const [openSlider, setOpenSlider] = useState(false);

	return (
		<div className="wrapper">
			<GlobalStyle />
			<Slider
					activeNavItem={activeNavItem}
					openSlider={openSlider}
					setOpenSlider={setOpenSlider}>
			</Slider>
			
			<StyledApp> 
				<Navbar 
					navbarData={navbarData} 
					activeNavItem={activeNavItem}
					setActiveNavItem={setActiveNavItem}
					openSlider={openSlider}
					setOpenSlider={setOpenSlider}>
				</Navbar>
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						<Route exact path="/" component={OpeningPage}/>
						<Route exact path="/about" component={AboutPage}/>
						<Route exact path="/works" component={WorksPage}/>
						<Route exact path="/contact" component={ContactPage}/>
						<Route exact path="/resume" component={ResumePage}/>
					</Switch>
				</AnimatePresence>

			</StyledApp>
			<div className={`sliding-menu ${openSlider ? 'open-sliding-menu': ''}`}>
				<SlidingMenu
					navbarData={navbarData} 
					activeNavItem={activeNavItem}
					setActiveNavItem={setActiveNavItem}
					openSlider={openSlider}
					setOpenSlider={setOpenSlider}>
				</SlidingMenu>
			</div>
			
		</div>
		
	);
}

export default App;

const StyledApp = styled.div`
	min-height: 100vh;
	padding: 0rem 10rem 0rem 10rem;
	position: relative;
`;	


 