import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { timestamp } from '../../firebase/config'
import { useFirestore } from '../../hooks/useFirestore'
import { useNavigate } from 'react-router'

// styles
import './index.scss'
import Loader from 'react-loaders'

const AddProject = () => {
  const navigate = useNavigate()
  const { addDocument, response } = useFirestore('projects')

  const { user } = useAuthContext()

  // form field values
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [formError, setFormError] = useState(null)

  const [projectImage, setProjectImage] = useState(null)
  const [projectImageError, setProjectImageError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)

    const createdBy = {
      displayName: user.displayName,
      id: user.uid,
    }

    const project = {
      title,
      description,
      url,
      createdBy,
    }

    await addDocument(project, projectImage, user.uid)
    if (!response.error) {
      navigate('/')
    }
  }

  const handleFileChange = (e) => {
    setProjectImage(null)
    let selected = e.target.files[0] // get first file selected
    console.log(selected)

    if (!selected) {
      setProjectImageError('Please select a file')
      return
    }
    if (!selected.type.includes('image')) {
      setProjectImageError('Selected file must be an image')
      return
    }
    if (selected.size > 100000) {
      setProjectImageError('Imae filesize must be less than 100kb')
      return
    }
    setProjectImageError(null)
    setProjectImage(selected)
    console.log('projectImage updated')
  }

  return (
    <>
      <div className="create-form">
        <h2 className="page-title">Create a new Project</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Project Title:</span>
            <input
              required
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label>
            <span>Project Description:</span>
            <input
              required
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </label>
          <label>
            <span>Project Url:</span>
            <input
              required
              type="text"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
          </label>
          <label>
            <span>Project Image: </span>
            <input required type="file" onChange={handleFileChange} />
            {projectImageError && (
              <div className="error">{projectImageError}</div>
            )}
          </label>
          <button className="btn">Add Project</button>
          {formError && <p className="error">{formError}</p>}
        </form>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default AddProject
