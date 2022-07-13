import './index.scss'
import { useRef } from 'react'

const Logo = () => {
  const bgRef = useRef()

  return (
    <div className="logo-container" ref={bgRef}>
      <svg viewBox="0 0 460 900">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="80%">J </text>
          <text textAnchor="middle" x="52%" y="80%">J </text>
          
        </symbol>

        <g className="g-ants">
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
        </g>
      </svg>
    </div>
  )
}

export default Logo
