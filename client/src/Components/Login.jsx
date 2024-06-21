import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';


   





const Login = () => {

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		const value = e.target.value;
		setFormData({
			...formData,
			[e.target.name]: value
		});
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		const userData = {
			email: formData.email,
			password: formData.password,
		};

		
		try {
			const response = await customFetch.post('/login', userData);
			console.log(response);
			toast.success('login successful');
			navigate("/portal");
			
		} catch (error) {
			toast.error(error?.response?.data?.error || 'login failed');
			console.log(error);
			
		}
	};

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
                          
                  <form onSubmit={handleSubmit}>
                     <div className="row g-3 ">

                        <div className="col-12">
                        <label
																htmlFor='email'
																className='form-label'
															>
																Email
															</label>
															<input
																type='email'
																id='email'
																name='email'
																className='form-control'
																value={formData.email}
																required
																onChange={handleChange}
															/>
                        </div>

                        <div className="col-12">
                        <label
																htmlFor='password'
																className='form-label'
															>
																Password
															</label>
															<input
																type='password'
																id='password'
																name='password'
																className='form-control'
																value={formData.password}
																required
																onChange={handleChange}
															/>
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
                  </form>

                 

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