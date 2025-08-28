import { useState } from 'react'
import React from 'react'
import useFadeInOnScroll from './custom-hooks/useFadeInOnScroll'
import './animation.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Hero from './components/Hero'
import Certificates from './components/Certificates'
import CallToAction from './components/CallToAction'
import ContectSection from './components/ContactSection'

function App() {
  const [count, setCount] = useState(0)

  const projects = [
    <Introduction />,
    <Hero />,
    <Certificates />,
    <CallToAction />,
    <ContectSection />,
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

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
