import { createGlobalStyle, keyframes } from 'styled-components';
import noisetexture from '../images/background/noise-texture.png';

export const themeStyles = {
    grayBackground: "#1b1b1b",
    dirtyWhite: "#f1f1f1",
    lightGray: "#b1b1b1",
    pageHeader: "8rem",
    text: "1.5rem",
    allura: "'Allura', cursive",
    montserrat: "'Montserrat', sans-serif",
    playfair: "'Playfair Display', serif",
}

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        color: #f1f1f1;
    }

    a, li {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
    

    // noisy background
    .wrapper {
		min-height: 100vh;
		width: 100%;
		overflow: hidden;
		background: #1b1b1b;
	}

	.wrapper:after {
		content: '';
		background-image: url(${noisetexture});
		height: 300%;
		width: 300%;
		opacity: 0.05;
		position: fixed;
        top: -100%;
        left: -100%;
        animation: grain 8s steps(10) infinite;
        pointer-events: none;
	}

    @keyframes grain {
        0%, 100% { transform:translate(0, 0) }
        10% { transform:translate(-5%, -10%) }
        20% { transform:translate(-15%, 5%) }
        30% { transform:translate(7%, -25%) }
        40% { transform:translate(-5%, 25%) }
        50% { transform:translate(-15%, 10%) }
        60% { transform:translate(15%, 0%) }
        70% { transform:translate(0%, 15%) }
        80% { transform:translate(3%, 20%) }
        90% { transform:translate(-10%, 10%) }
    }

`;
