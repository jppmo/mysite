import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faUnity,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'About me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            After spending the last year working as a game developer
            with a couple of friends,<br /> I've learned a lot about how to develop a
            project from the ground up and honed my Unity and C# skills.
          </p>
          <p>
            At the moment I'm building a website to showcase some of my work
            done until now and to refresh<br /> and further develop my web development
            skills.
          </p>
          <p>
            I'm also looking for a role as a frontend developer in a modern and
            established IT company and for<br /> an opportunity to work with the
            latest technologies on interesting projects.
          </p>
          <p>
            I love to learn and tinker with everything technology related, be it
            creating games for fun on Unity or<br /> developing/delivering fine web
            apps/solutions
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faUnity} color="#fff" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
