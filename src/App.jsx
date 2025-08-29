import { useState } from 'react'
import React from 'react'
import useFadeInOnScroll from './custom-hooks/useFadeInOnScroll'
import './animation.css'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Hero from './components/Hero'
import Certificates from './components/Certificates'
import CallToAction from './components/CallToAction'
import ContectSection from './components/ContactSection'
import CompetitiveProgramming from './components/CompetitiveProgramming'

function App() {
  const [count, setCount] = useState(0)

  const projects = [
    <Introduction />,
    <Hero />,
    <Certificates />,
    <CallToAction />,
    <ContectSection />,
    <CompetitiveProgramming />
  ]

  return (
    <>
      <Navbar />
      <section className="project-section">
      {projects.map((project, index) => {
        const direction = index % 2 === 0 ? 'left' : 'right';
        const { ref, className } = useFadeInOnScroll(direction);

        return (
          <div key={index} ref={ref} className={className}>
            {project}
          </div>
        );
      })}
      </section>
    </>
  )
}

export default App
