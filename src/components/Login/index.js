import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useLogin } from '../../hooks/useLogin'
import AnimatedLetters from '../AnimatedLetters'

// styles
import './index.scss'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

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
      <div className="container login-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Login'.split('')}
              idx={15}
            />
          </h1>
          <div>
            <form onSubmit={handleSubmit} className="login-form">
              <ul>
                <li>
                  <input
                    required
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </li>
                <li>
                  <input
                    required
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </li>

                {!isPending && <button className="flat-button">Login</button>}
                {isPending && (
                  <button className="flat-button" disabled>
                    loading
                  </button>
                )}
                {error && <div className="error">{error}</div>}
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />

      {/* <form onSubmit={handleSubmit} className="auth-form">
      <h2>login</h2>
      <label>
        <span>email:</span>
        <input
          required
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
        />
      </label>
      <label>
        <span>password:</span>
        <input 
          required
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
        />
      </label>
      {!isPending && <button className="btn">Log in</button>}
      {isPending && <button className="btn" disabled>loading</button>}
      {error && <div className="error">{error}</div>}
    </form> */}
    </>
  )
}

export default Login
