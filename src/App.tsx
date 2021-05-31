// Packages
import { useState } from 'react';
import { INavItem, generateNavbarData } from './data/navbarData';
import styled from 'styled-components';

// Components
import { Navbar } from './components/Navbar';

// Styles
import { GlobalStyle } from './styles/globalStyle';

// Images

function App() {
	// Data
	const navbarData:INavItem[] = generateNavbarData();

	// States
	const [activeNav, setActiveNav] = useState(navbarData[0]);

	return (
		<div className="wrapper">
			<StyledApp className="app"> 
				<GlobalStyle />
				<Navbar 
					navbarData={navbarData} 
					activeNav={activeNav}
					setActiveNav={setActiveNav}>
				</Navbar>
			</StyledApp>
		</div>
		
	);
}

export default App;

const StyledApp = styled.div`
	min-height: 100vh;
	width: 90%;
	margin: auto;
`;	
 