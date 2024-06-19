import React from 'react'
import { Link } from 'react-router-dom'
import FormRow from './FormRow'

const Login = () => {
  return (
    <>
    <form className='form' style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',marginTop:'2rem'}}>
        <h4><i class="bi bi-alipay"></i></h4>
        <h4>Login</h4>
        <FormRow type='email' name='email' defaultValue='sara@gmail.com' />
        <FormRow type='password' name='password' defaultValue='sara000' />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <button type='button' className='btn btn-block'>
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </form>
    
    </>
  )
}

export default Login