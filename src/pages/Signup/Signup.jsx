import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import './Signup.css'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className='container'>
      <img id='signup-img' src="https://i.imgur.com/8nvqijy.png" alt='landing page logo' height='200' width='200'/>
      <h1 className='sign-up-header' >Sign Up
      </h1>
      <small className='text-muted'>Create an account with Scoute</small>
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default Signup
