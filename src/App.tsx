// Packages
import { useState, useEffect } from 'react';
import { INavItem, generateNavbarData, generateNotFoundData } from './data/navbarData';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { useLocation, Switch, Route, useHistory, Redirect } from 'react-router-dom';

// Components
import { Navbar } from './components/Navbar';
import { Slider } from './components/Slider';
import { SlidingMenu } from './components/SlidingMenu';
import { ScrollTop } from './components/ScrollTop';
import { Footer } from './components/Footer';	
import { LoadingScreen } from './components/LoadingScreen';

// Styles
import { GlobalStyle } from './styles/globalStyle';

// Pages
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { OpeningPage } from './pages/OpeningPage';
import { ResumePage } from './pages/ResumePage';
import { WorksPage } from './pages/WorksPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
	// // Scroll to top
	window.onload = function () {
        setTimeout(function() {
            window.scrollTo(0,0);
        } , 1)
    }
	
	// Data
	const navbarData: INavItem[] = generateNavbarData();
	const notFoundData: INavItem = generateNotFoundData();
	const location = useLocation();
	const url = useHistory().location.pathname;

	// States
	const [activeNavItem, setActiveNavItem] = useState(navbarData[0]);
	const [openSlider, setOpenSlider] = useState(false);

	// Effect
	useEffect(() => {
		let currentPage = navbarData.filter((page) => page.url === url)[0];
		if (currentPage === undefined) {
			currentPage = notFoundData;
		}
		setActiveNavItem(currentPage);
	},[url]);

	

	return (
		<div className="wrapper">
			<GlobalStyle />
			{/* <LoadingScreen /> */}
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
							
						<Route exact path="/" 
							component={ () => <OpeningPage  
								activeNavItem={activeNavItem}
								setActiveNavItem={setActiveNavItem}
								nextNavItem={navbarData[1]}
							/>}
						/>
						<Route exact path="/about" 
							component={ () => <AboutPage 
								activeNavItem={activeNavItem}
								setActiveNavItem={setActiveNavItem}
								nextNavItem={navbarData[2]}
							/>}
						/>
						<Route exact path="/works" 
							component={ () => <WorksPage 
								activeNavItem={activeNavItem}
								setActiveNavItem={setActiveNavItem}
								nextNavItem={navbarData[3]}
							/>}
						/>
						<Route exact path="/contact" 
							component={ () => <ContactPage 
								activeNavItem={activeNavItem}
								setActiveNavItem={setActiveNavItem}
								nextNavItem={navbarData[4]}
							/>}
						/>
						<Route exact path="/resume" 
							component={ () => <ResumePage 
								activeNavItem={activeNavItem}
								nextNavItem={navbarData[0]}
								setActiveNavItem={setActiveNavItem}
							/>}
						/>
						<Route exact path="/Error404" 
							component={ () => <NotFoundPage activeNavItem={activeNavItem}/>}
						/>
						<Redirect from="*" to="/Error404"/>
					</Switch>
				</AnimatePresence>
				<Footer></Footer>
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
			<ScrollTop/>
			
		</div>
		
	);
}

export default App;

const StyledApp = styled.div`
	min-height: 100vh;
	padding: 0rem 10rem 0rem 10rem;
	position: relative;

	@media (max-width: 900px) {
		padding: 0rem 2rem 0rem 7rem;
	}

	@media (max-width: 650px) {
		padding: 0rem 2rem 0rem 2rem;
	}
`;	


 