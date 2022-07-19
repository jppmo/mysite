import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import ProfilePicture from '../../assets/images/lady.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
  faFaceMeh,
  faFaceGrin,
  faPlus,
  faBook,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faGitlab,
  faLinkedin,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <div className="nav-bar no-printme">
      <Link className="logo" to="/">
        <img src={ProfilePicture} alt="lady" title="lady!" />
        {/* <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
      </Link>
      <ul>
        {!user && (
          <li>
            <Link to="/login">
              <FontAwesomeIcon icon={faFaceGrin} color="#181818" />
            </Link>
          </li>
        )}
        {user && (
          <>
            <li>
              <button onClick={logout}>
                <FontAwesomeIcon icon={faFaceMeh} color="#4d4d4e" />
              </button>
            </li>
            <li>
              <Link to="/addProject">
                <FontAwesomeIcon icon={faPlus} color="#4d4d4e" />
              </Link>
            </li>
          </>
        )}
      </ul>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="resume-link"
          to="/resume"
        >
          <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/jppmo">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://gitlab.com/joaoliveira1990"
          >
            <FontAwesomeIcon icon={faGitlab} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jppmo/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Sidebar
