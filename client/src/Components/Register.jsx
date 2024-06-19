import React from 'react'
import FormRow from './FormRow'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
    <form className='form' style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',marginTop:'2rem'}}>
           <h4><i class="bi bi-alipay"></i></h4>
        <h4>Register</h4>
        <FormRow type='text' name='name' />
        <FormRow type='text' name='lastName' labelText='last name' />
        <FormRow type='text' name='location' />
        <FormRow type='email' name='email' />

        <FormRow type='password' name='password' />

        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </>
  )
}

export default Register