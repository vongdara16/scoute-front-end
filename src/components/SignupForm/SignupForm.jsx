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
  const handleChangePhoto = evt => {
		setFormData({...formData, photo: evt.target.files[0]})
	}


  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className='container'
    >
      <div className="form-group mb-1">
				<label htmlFor="photo-upload" className="form-label" id='inputGroup-sizing-default'>
				</label>
					<input
						type="file"
						className="form-control"
						id="photo-upload"
						name="photo"
						onChange={handleChangePhoto}
					/>
				</div>
      <div className='input-group mb-1'>
        <label htmlFor="name" className='input-group-text' id='inputGroup-sizing-default' >
          <i className='material-icons'>create</i>
        </label>
        <input
          className="form-control"
          aria-label="Sizing example input"
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
          placeholder='Full Name'
        />
      </div>
      <div className='input-group mb-1'>
        <label htmlFor="email" className='input-group-text' id='inputGroup-sizing-default' >
        <i className='material-icons'>email</i>
        </label>
        <input
          className='form-control'
          aria-label='Sizing example input'
          type="text"
          autoComplete="off"
          id="signup-email"
          value={email}
          name="email"
          onChange={handleChange}
          placeholder='Email'
        />
      </div>
      <div className='input-group mb-1'>
        <label htmlFor="password" className='input-group-text' id='inputGroup-sizing-default'>
        <i className='material-icons'>key</i>
        </label>
        <input
          className='form-control'
          aria-label='Sizing example input'
          type="password"
          autoComplete="off"
          id="signup-password"
          value={password}
          name="password"
          onChange={handleChange}
          placeholder='Password'
        />
      </div>
      <div className='input-group mb-1'>
        <label htmlFor="confirm" className='input-group-text' id='inputGroup-sizing-default'>
        <i className='material-icons'>key</i>
        </label>
        <input
          className='form-control'
          aria-label='Sizing example input'
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
        <button disabled={isFormInvalid()} className='btn btn-secondary btn-fluid' id='sign-up-btn' >
          Sign Up
        </button>
        <Link to="/">
          <button className='btn btn-danger btn-fluid' >Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default SignupForm
