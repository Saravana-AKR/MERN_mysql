import React from 'react';
import FormRow from './FormRow';
import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
  console.log(data);
	try {
		await customFetch.post('/register', data);
		toast.success('Registration successful');
		return redirect('/login');
	} catch (error) {
		toast.error(error?.response?.data?.msg || 'Registration failed');
		return error;
	}
};

const Register = () => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';

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

												<Form
													method='post'
                          preventScrollReset={true}
												>
													<div className='row g-3 '>
														<div className='col-12'>
															<FormRow
																type='text'
																name='Name'
															/>
													
														</div>

														<div className='col-12'>
															<FormRow
																type='email'
																name='Email'
															/>
														
														</div>

														<div className='col-12'>
															<FormRow
																type='password'
																name='Password'
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
																disabled={isSubmitting}
															>
																{isSubmitting
																	? 'Creating Account...'
																	: 'Submit'}
															</button>
														</div>
														<div className='col-12'>
															<p className='small mb-0'>
																Already have an account?{' '}
																<Link
																	to='/login'
																	className=' text-primary p-2 ms-2'
																>
																	Login
																</Link>
															</p>
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
			</div>
		</>
	);
};

export default Register;
