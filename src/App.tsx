// Packages
import { useState } from 'react';
import { INavItem, generateNavbarData } from './data/navbarData';
import styled from 'styled-components';

// Components
import { Navbar } from './components/Navbar';
import { Slider } from './components/Slider';
import { SlidingMenu } from './components/SlidingMenu';

// Styles
import { GlobalStyle } from './styles/globalStyle';

// Images

function App() {
	// Data
	const navbarData:INavItem[] = generateNavbarData();

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


 