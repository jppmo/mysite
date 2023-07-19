import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Resume = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const print = () => {
    window.print()
  }

  return (
    <>
      <div className="container resume-page">
        <div className="resume-content printme">
          {/* <span className="print no-printme" onClick={print}>
            PRINT
          </span> */}
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Profile'.split('')}
              idx={15}
            />
          </h1>
          <p>
            Programmer with 5+ years of experience, helped companies by solving
            problems with open source technologies.{' '}
            <br className="no-printme" />I love to learn, work cooperatively
            with like-minded individuals and deliver great solutions!
          </p>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Employement History'.split('')}
              idx={15}
            />
          </h1>
          <h3>Full Stack Developer at Foremost, Santarém, Portugal</h3>
          <h4>December 2017 — December 2019</h4>
          <ul>
            <li>
              Implemented and maintained a Point of Sale open source software
              with electron and sockets.
            </li>
            <li>
              Managed and implemented endpoints in the server api used by the
              PoS units with php, mysql and sockets for real-time data.
            </li>
            <li>
              Developed backend and frontend systems on the company's SAP
              server, namely the product expedition and delivery systems.
            </li>
          </ul>
          <br className="no-printme" />
          <h3>Full Stack Developer at Aruki, Lisbon, Portugal</h3>
          <h4>February 2020 — August 2020</h4>
          <ul>
            <li>
              Developed a dashboard app with react for the companys' back office
            </li>
            <li>Helped in implementing/modifying the css/sass template</li>
            <li>Created api endpoints on the server using Elixir</li>
          </ul>
          <br className="no-printme" />
          <h3>Game Programmer at Innominate Studios, Santarém, Portugal</h3>
          <h4>October 2020 — March 2022</h4>
          <p>
            Won a scholarship for developing a multiplayer top down action rpg
            game in Unity.
          </p>
          <ul>
            <li>Planned, designed and implemented game systems</li>
            <li>Created and maintained Unity repositories with git LFS</li>
            <li>Developed a unity game server with custom TCP/IP code</li>
            <li>
              Learned and implemented multiplayer game techniques to solve
              problems, like reconciliation and lag prediction
            </li>
            <li>
              Used zero tier one to build a test environment to play with
              friends online
            </li>
          </ul>

          <br className="no-printme" />
          <h3>Backend/Fullstack developer at AirTrain, Germany (Remote)</h3>
          <h4>August 2022 - February 2023</h4>
          <ul>
            <li>
            Developed backend for a Learning Management System in NestJs and Typescript.
            </li>
            <li>Planned and created the ORM database structure in ParseServer.</li>
            <li>Developed on a microservice structured environment using gRpc for communications between servers.</li>
            <li>Worked with sockets for real-time communication between server and clients.</li>
            <li>Implemented and tested Endpoints on the server REST API.</li>
            <li>Implemented Sentry.io on the backend for monitoring.</li>
            <li>Implemented video chat apis on both backend and react frontend (ZoomApi, CometChat).</li>
            <li>Worked on an atomically structured react front end, fixing bugs and helping out with development when needed.</li>
            <li>Used Postman for extensive testing in both environments.</li>
            <li>Helped with backend operations for cloud hosting in (atlassian, aws, s3, CI/CD, gitlab).</li>
          </ul>

          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Education'.split('')}
              idx={15}
            />
          </h1>
          <h3>Bachelor's Degree, Instituto Superior Técnico, Lisbon</h3>
          <h4>September 2009 — August 2012</h4>
          <p>
            Completed 2 years in Computer Engineering later transfering to
            Instituto Politécnico de Santarém with a bachelors in Computer
            Science.
          </p>
          <br />
          <h3>
            Bachelor's Degree, Escola Superior Gestão de Santarém, Santarém
          </h3>
          <h4>November 2012 — September 2016</h4>
          <p>Completed my studies in Computer science in my home town.</p>

          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'References'.split('')}
              idx={15}
            />
          </h1>
          <h2>References available upon request</h2>

          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Online Education'.split('')}
              idx={15}
            />
          </h1>
          
          <h3>NestJS: The Complete Developer's Guide</h3>
          <h4>July 2022 — August 2022</h4>

          <br />
          <h3>Build Web Apps with React & Firebase</h3>
          <h4>February 2022 — March 2022</h4>

          <br />
          <h3>The Ultimate Guide To Video Game Optimization, Udemy</h3>
          <h4>October 2021 — November 2021</h4>

          <br />
          <h3>
            Learn Unity's Entity Component System to Optimise Your Games, Udemy
          </h3>
          <h4>October 2021 — November 2021</h4>

          <br />
          <h3>The Web Developer Bootcamp 2017, Udemy</h3>
          <h4>December 2016 — March 2017</h4>

          <br />
          <h3>Master Unity By Building 6 Fully Featured Games From Scratch</h3>
          <h4>December 2016 — February 2017</h4>

        </div>
        <a
          className="print-button"
          target="_blank"
          rel="noreferrer"
          href="https://firebasestorage.googleapis.com/v0/b/myportfolio-a115d.appspot.com/o/cv-joaoliveira.pdf?alt=media&token=e2e48903-b2f2-48e7-b7d4-a7672338b03f"
        >
          Download pdf
        </a>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Resume
