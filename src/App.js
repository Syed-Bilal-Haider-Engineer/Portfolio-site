import { ThemeProvider } from "styled-components";
import { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import { darkTheme, lightTheme } from './utils/theme.js';

const Navbar = lazy(() => import('./components/Navbar/index.js'));
const Skills = lazy(() => import('./components/Skills/index.js'));
const Projects = lazy(() => import('./components/Projects/index.js'));
const Education = lazy(() => import('./components/Educations/index.js'));
const Experience = lazy(() => import('./components/Experience/index.js'));
const Contact = lazy(() => import('./components/Contacts/index.js'));
const Footer = lazy(() => import('./components/Footer/Footer.js'));
const ProjectDetails = lazy(() => import('./components/ProjectsDetails/index.js'));
const HeroSection = lazy(() => import('./components/Hero/index.js'));

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
   linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

const Loading = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const darkMode = true;
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Suspense fallback={<Loading> Loading .... </Loading>}>
          <Navbar />
          <Body>
            <HeroSection />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
              <Education />
              <Contact />
            </Wrapper>
            <Footer />
            {openModal.state &&
              <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
            }
          </Body>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
