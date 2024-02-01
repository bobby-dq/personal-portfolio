// Packages
import { FunctionComponent } from "react";
import styled from "styled-components";
import { INavItem } from "../data/navbarData";
import { motion, AnimationControls } from "framer-motion";

// Styles
import { themeStyles as theme } from "../styles/globalStyle";

// Components
import { PageIndicator } from "./PageIndicator";

//Animations
import { useScroll } from "../styles/useScroll";
import { loadComponentAnimation } from "../styles/animations";

interface IPrologue {
  activeNavItem: INavItem;
}

export const Prologue: FunctionComponent<IPrologue> = (p) => {
  const [element, controls] = useScroll(0.33);

  return (
    <StyledPrologue
      ref={element as (node?: Element | null | undefined) => void}
      animate={controls as AnimationControls}
      variants={loadComponentAnimation}
      initial="hidden"
    >
      <PageIndicator activeNavItem={p.activeNavItem}></PageIndicator>
      <div className="content">
        <p>
          Hey there! I'm Bobby Quilacio, a computer science student on a journey
          to turn cool ideas into reality through code. Currently diving into
          the realms of software, machine learning, and computer architecture
          while pursuing my Computer Science degree. Always buzzing with
          excitement to learn and evolve in this ever-changing tech world!
        </p>
        <p>
          My software engineering internship adventures have been a blast –
          full-stack development using DotNet, React, Angular, SQL, AWS, and
          Azure. Each experience has added a dash of uniqueness to my skill set,
          making me a well-rounded developer.
        </p>
        <p>
          Beyond internships, I also freelance (
          <a
            className="in-text-link"
            href="https://www.himostudios.com"
            rel="noreferrer"
            target="_blank"
          >
            HIMO | Web Studio
          </a>
          ), specializing in React projects. Freelancing lets me dive into
          diverse challenges and turn client dreams into digital reality. I
          strongly believe in the magic of clean, efficient code to solve
          problems and create seamless user experiences.
        </p>
        <p>
          As technology keeps on doing its thing, my curiosity and passion keep
          growing. Super stoked about the endless possibilities in the world of
          computer science! Excited to contribute my skills to projects that
          pack a punch and make a real impact.
        </p>
        <p>
          Feel free to wander through my portfolio to catch a glimpse of my
          journey and the awesome projects I've been lucky to be a part of.
          Let's connect and dive into the exciting world of tech together! 🚀
        </p>

        <h1>Bobby Quilacio</h1>
      </div>
    </StyledPrologue>
  );
};

const StyledPrologue = styled(motion.div)`
  padding-top: 10rem;
  min-height: 50vh;
  font-size: ${theme.text};
  font-family: ${theme.montserrat};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  .content {
    flex: 1 1 66.67%;
    p,
    ul {
      padding-bottom: 2rem;
      font-size: 1.6rem;
    }
    h1 {
      font-family: ${theme.montserrat};
      font-size: 1.6rem;
    }
    a {
      display: flex;
      font-family: ${theme.playfair};
      font-weight: bold;
      text-decoration: underline;
      width: fit-content;
      transition: all 0.33s ease;

      &:hover {
        color: rgba(255, 0, 0, 1);
      }
    }
    .in-text-link {
      display: inline-block;
      text-decoration: underline;
      transition: all 0.33s ease;
      font-weight: regular;
      &:hover {
        color: rgba(255, 0, 0, 1);
      }
    }
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
