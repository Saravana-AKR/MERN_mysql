import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <>
        <nav className='landing-nav'>
        <img src='img/brand-logo.png' alt='logo' className='landing-logo'/>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1 className='landing-h1'>
            AKR <span>Payroll</span> System 
          </h1>
          <p className='landing-p'>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <div className='landing-btn'>
          <Link to='/register' className='btn btn-primary register-link'>
            Register
          </Link>
          <Link to='/login' className='btn btn-primary'>
            Login / Demo User
          </Link>
          </div>
          
        </div>
        <img src='img/main.svg' alt='job hunt' className='landing-img main-img' />
      </div>
    </>
  )
}

export default Landing