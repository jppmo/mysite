import './App.scss'
import { useAuthContext } from './hooks/useAuthContext'

import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Login from './components/Login'
import AddProject from './components/AddProject'

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <>
      {authIsReady && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route
                path="login"
                element={user ? <Navigate to="/" /> : <Login />}
              />
              <Route
                path="addProject"
                element={user ? <AddProject /> : <Navigate to="/" />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
