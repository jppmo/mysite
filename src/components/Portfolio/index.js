import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useCollection } from '../../hooks/useCollection'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const { documents, error } = useCollection('projects')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  //put in separate file
  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio &&
          portfolio.map((proj, idx) => {
            return (
              <div className="image-box" key={idx}>
                <img
                  className="project-image"
                  src={proj.imageUrl}
                  alt="cover"
                />
                <div className="content">
                  <p className="title">{proj.title}</p>
                  <h4 className="description">{proj.description}</h4>
                  <button className="btn" onClick={() => window.open(proj.url)}>
                    View
                  </button>
                </div>
              </div>
            )
          })}
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(documents)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
