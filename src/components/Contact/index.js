import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useFirestore } from '../../hooks/useFirestore'

import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [formError, setFormError] = useState(null)

  const { addDocument, response } = useFirestore('messages')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)

    const contactData = {
      name,
      email,
      subject,
      message,
    }

    await addDocument(contactData, false, 0)
    if (!response.error) {
      alert(
        'Your message was delivered to João. Thanks for leaving your feedback!'
      )
      navigate('/')
    }
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contact me'.split('')}
              idx={15}
            />
          </h1>
          <p>
            I'm looking for remote opportunities abroad since I'm currently
            based in Portugal. However, if you have a request or question, don't
            hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                    required
                  />
                </li>
                {formError && <p className="error">{formError}</p>}
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
