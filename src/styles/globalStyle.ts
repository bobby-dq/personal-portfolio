import { createGlobalStyle, keyframes } from 'styled-components';
import noisetexture from '../images/background/noise-texture.png';

export const themeStyles = {
    darkGray: "#1b1b1b",
    dirtyWhite: "#f1f1f1",
    lightGray: "#b1b1b1",
    pageHeader: "12rem",
    subHeader: "6.4rem",
    text: "2.4rem",
    smallText: "1.2rem",
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
        color: ${themeStyles.dirtyWhite};
        font-size: 62.5%;
        overflow-x: hidden;
    }

    a, li {
        text-decoration: none;
        color: ${themeStyles.dirtyWhite};
    }

    ul {
        list-style: none;
    }
    

    // noisy background
    .wrapper {
		width: 100%;
		background: #1b1b1b;
        overflow-x: hidden;

        .sliding-menu {
            width: 100%;
            position: absolute;
            top: 0%;
            left: -100%;
            transition: transform 0.33s ease-in-out;
            overflow-x: hidden;
        }

        .open-sliding-menu {
            transform: translateX(100%);
        }

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
