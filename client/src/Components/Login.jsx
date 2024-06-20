import React from 'react'
import FormRow from './FormRow'
import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';


   


        export const action = async ({ request }) => {
          const formData = await request.formData();
          const data = Object.fromEntries(formData);
          console.log(data);
          try {
            await customFetch.post('/login', data);
            toast.success('Login successful');
            return redirect('/');
          } catch (error) {
            toast.error(error?.response?.data?.msg || 'Login failed');
            return error;
          }
        };



const Login = () => {

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'; 


  return (
    <>


<main>
    <div className="container">

      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className=" col-xl-4 col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div className="d-flex justify-content-center py-4">
                <a href="#" className="logo d-flex align-items-center w-auto">
                  <img src="img/logo-small.png" alt=""/>
                  <span className='d-none  akr-symbol'>AKR</span>
                  <span className="d-none d-lg-block">AKR Industries PVT LTD</span>
                </a>
              </div>

              <div className="card mb-3">

                <div className="card-body">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    {/* <p className="text-center small">Enter your username & password to login</p> */}
                  </div>
                          
                  <Form method='post'>
                     <div className="row g-3 ">

                        <div className="col-12">
                          <FormRow type='text' name='Name' defaultValue='sara@gmail.com' />
                          <div className="invalid-feedback">Please enter your username.</div>
                        </div>

                        <div className="col-12">
                          <FormRow type='password' name='Password' defaultValue='sara123' />
                          <div className="invalid-feedback">Please enter your password!</div>
                        </div>

                        {/* <div className="col-12">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe"/>
                            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                          </div>
                        </div> */}
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type="submit" >Login</button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">Don't have account? <Link to='/register' className=' text-primary p-2 ms-2'> Register </Link></p>
                        </div>
                     </div>
                  </Form>

                 

                </div>
              </div>

          

            </div>
          </div>
        </div>

      </section>

    </div>
  </main>
  
    
    </>
  )
}

export default Login



{/* <form className='form' style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center',marginTop:'2rem'}}>
        <h4><i className="bi bi-alipay"></i></h4>
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
      </form> */}