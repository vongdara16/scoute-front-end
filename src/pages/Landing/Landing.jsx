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
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/home')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }
  return (
    <>
      <main className='container'>
        <img id='img-landing' src="https://i.imgur.com/8nvqijy.png" alt='landing page logo' height='500' width='500'/>
        <div className='pTag' >
          <h1 className='sign-in-header'>Sign in below</h1>
          <small className='text-muted muted-landing'>Or if you dont have an account sign up!</small>
        </div>
      </main>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className='container'
        id='landing-form'
      >
      <div className='inputContainer input-group mb-3'>
        <label htmlFor="email" className='label landing-label input-group-text' id='inputGroup-sizing-default' >
        <i className='material-icons'>email</i>
        </label>
        <input
          className='form-control landing-form'
          aria-label='Sizing example input'
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder='Email'
        />
      </div>
      <div className='inputContainer input-group mb-3'>
        <label htmlFor="password" className='label landing-label input-group-text' id='inputGroup-sizing-default'>
        <i className='material-icons'>key</i>
        </label>
        <input
          className='form-control landing-form'
          aria-label='Sizing example input'
          type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          onChange={handleChange}
          placeholder='Password'
        />
      </div>
      <div id='sign-btns'>
        <div >
          <button id='sign-in' className='btn btn-secondary btn-lg'>Sign In</button>
        </div>
        <div>
          <Link to='/signup'>
            <button id='sign-up' className='btn btn-outline-secondary btn-lg'>Sign Up</button>
          </Link>
        </div>
      </div>
    </form>
    </>
  )
}

export default Landing