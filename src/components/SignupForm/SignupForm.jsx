import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignupForm.css'
import * as authService from '../../services/authService'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/home')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className='container'
    >
      <div className='inputContainer'>
        <label htmlFor="name" className='label'></label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
          placeholder='Name'
        />
      </div>
      <div className='inputContainer'>
        <label htmlFor="email" className='label'></label>
        <input
          type="text"
          autoComplete="off"
          id="signup-email"
          value={email}
          name="email"
          onChange={handleChange}
          placeholder='Email'
        />
      </div>
      <div className='inputContainer'>
        <label htmlFor="password" className='label'></label>
        <input
          type="password"
          autoComplete="off"
          id="signup-password"
          value={password}
          name="password"
          onChange={handleChange}
          placeholder='Password'
        />
      </div>
      <div className='inputContainer'>
        <label htmlFor="confirm" className='label'>
        </label>
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
          placeholder='Confirm Password'
        />
      </div>
      <div>
        <button disabled={isFormInvalid()} className='button'>
          Sign Up
        </button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default SignupForm
