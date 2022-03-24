import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Landing.css'
import * as authService from '../../services/authService'

const Landing = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
  const navigate = useNavigate()

  const handleChange = e => {
    // props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }
  return (
    <>
      <main id='image-container'>
        <img src="https://i.imgur.com/8nvqijy.png" alt='landing page logo' height='600' width='600'/>
        <div className='pTag' >
          <p>
            Please Sign in with Email and password or Sign up below!
          </p>
        </div>
      </main>
        <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className='container'
      >
      <div className='inputContainer'>
        <label htmlFor="email" className='label'></label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder='Email'
        />
      </div>
      <div id='hl' className='inputContainer'>
        <label htmlFor="password" className='label'></label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          onChange={handleChange}
          placeholder='Password'
        />
      </div>
      <div>
        <Link to='/home'>
          <button className='button'>Sign In</button>
        </Link>
      </div>
      <div>
        <Link to='/signup'>
          <button className='button' >Sign Up</button>
        </Link>
      </div>
    </form>
    </>
  )
}

export default Landing