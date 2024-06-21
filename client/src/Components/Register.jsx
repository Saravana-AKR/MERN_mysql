// import axios from 'axios';
import React, { useState } from 'react';
import customFetch from '../utils/customFetch';
import {  Link,useNavigate, } from 'react-router-dom';
import { toast } from 'react-toastify';


const Register = () => {

	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		name: '',
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
			name: formData.name,
			email: formData.email,
			password: formData.password,
		};

		
		try {
			const response = await customFetch.post('/register', userData);
			console.log(response);
			toast.success('Registration successful');
			navigate("/login");
			
		} catch (error) {
			toast.error(error?.response?.data?.error || 'Registration failed');
			console.log(error);
			
		}
	};

	return (
		<>
			<div>
				<main>
					<div className='container'>
						<section className='section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4'>
							<div className='container'>
								<div className='row justify-content-center'>
									<div className='col-xl-4 col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center'>
										<div className='d-flex justify-content-center py-4'>
											<a
												href='#'
												className='logo d-flex align-items-center w-auto'
											>
												<img
													src='img/logo-small.png'
													alt=''
												/>
												<span className='d-none d-lg-block'>
													AKR Industries PVT LTD
												</span>
											</a>
										</div>

										<div className='card mb-3'>
											<div className='card-body'>
												<div className='pt-4 pb-2'>
													<h5 className='card-title text-center pb-0 fs-4'>
														Create an Account
													</h5>
													{/* <p className="text-center small">Enter your personal details to create account</p> */}
												</div>

												<form
													// method='post'
													onSubmit={handleSubmit}
													//   preventScrollReset={true}
												>
													<div className='row g-3 '>
														<div className='col-12'>
															<label
																htmlFor='name'
																className='form-label'
															>
																Name
															</label>
															<input
																type='text'
																id='name'
																name='name'
																className='form-control'
																value={formData.name}
																required
																onChange={handleChange}
															/>
														</div>

														<div className='col-12'>
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

														<div className='col-12'>
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

														{/* <div className='col-12'>
															<FormRow
																type='password'
																name='Confirm Password'
															/>
															
														</div> */}

														{/* <div className='col-12'>
															<div className='form-check'>
																<input
																	className='form-check-input'
																	name='terms'
																	type='checkbox'
																	value=''
																	id='acceptTerms'
																	required
																/>
																<label
																	className='form-check-label'
																	htmlFor='acceptTerms'
																>
																	I agree and accept the
																	<a href='#'> Terms and conditions</a>
																</label>
															
															</div>
														</div> */}

														<div className='col-12'>
															<button
																className='btn btn-primary w-100'
																type='submit'
																// disabled={isSubmitting}
															>
																{/* {isSubmitting
																	? 'Creating Account...'
																	: 'Submit'} */}
																Submit
															</button>
														</div>
														<div className='col-12'>
															<p className='small mb-0'>
																Already have an account?
																<Link
																	to='/login'
																	className=' text-primary p-2 ms-2'
																>
																	Login
																</Link>
															</p>
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
			</div>
		</>
	);
};

export default Register;
