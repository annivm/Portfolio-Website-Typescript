import { useRef } from 'react';
import Introduction from './components/Introduction/Introduction'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'

import './App.css'
import ScrollToTop from './components/Shared/ScrollToTop/ScrollToTop';

function App() {
  const introRef = useRef<HTMLElement | null>(null);
  const expRef = useRef<HTMLElement | null>(null);
  const eduRef = useRef<HTMLElement | null>(null);
  const projRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  // Navbar scroll function
  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    if (!ref.current) return;
    const navBarHeight = (document.querySelector('.navbar') as HTMLElement)?.offsetHeight || 0;
    const offsetTop = ref.current.offsetTop - navBarHeight -28; //28px extra buffer
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  };


  return (
    <>

      <ScrollToTop onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}/>
      <Introduction ref={introRef}/>
      <NavBar
        onIntro={() => scrollTo(introRef)}
        onExp={() => scrollTo(expRef)}
        onEdu={() => scrollTo(eduRef)}
        onProj={() => scrollTo(projRef)}
        onContact={() => scrollTo(contactRef)}
      />
      <Experience ref={expRef}/>
      <Education ref={eduRef}/>
      <Projects ref={projRef}/>
      <Contact  ref={contactRef}/>
    </>
  )
}

export default App
