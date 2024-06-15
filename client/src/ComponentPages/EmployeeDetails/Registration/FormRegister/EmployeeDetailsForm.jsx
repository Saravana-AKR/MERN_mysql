import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EmployeeDetailsForm = ({
	formData,
	setFormData,
	nextStep,
	activeTab,
	setActiveTab,
}) => {
	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(e.target);
		setFormData((prev) => ({
			...prev,
			employeeDetails: { ...prev.employeeDetails, [name]: value },
		}));
	};

	return (
		<>
			<section className='section'>
				<div className='row'>
					<div className='col-lg-12'>
						<div className='card'>
							<div className='card-body'>
								<div className='row'>
									<div className='col-md-12'>
										<div>
											<div className='container mt-5'>
												<div
													className='tab-content pt-2'
													id='borderedTabContent'
												>
													<div
														className={`tab-pane fade ${
															activeTab === 'home' ? 'show active' : ''
														}`}
														id='bordered-home'
														role='tabpanel'
														aria-labelledby='home-tab'
													>
														<form>
															<div className='form-group'>
																<label htmlFor='employeeId'>Employee ID:</label>
																<input
																	type='text'
																	className='form-control'
																	id='employeeId'
																	name='employeeId'
																	value={formData.employeeDetails.employeeId}
																	onChange={handleChange}
																/>
															</div>

															<div>
																<label htmlFor='department'>Department:</label>
																<input
																	type='text'
																	className='form-control'
																	id='department'
																	name='department'
																	value={formData.employeeDetails.department}
																	onChange={handleChange}
																/>
															</div>

															<button
																className='btn btn-primary'
																type='button'
																onClick={nextStep}
															>
																
																Next
															</button>
														</form>
													</div>
												</div>
											</div>
											{/* <form>
                                          <div className="form-group">
                                            <label htmlFor="employeeId">Employee ID:</label>
                                            <input type="text" className='form-control' id='employeeId' name="employeeId" value={formData.employeeDetails.employeeId} onChange={handleChange} />
                                         </div>
                                                    
                                            <div>
                                                <label htmlFor="department">Department:</label>
                                                  <input type="text" className='form-control' id='department' name="department" value={formData.employeeDetails.department} onChange={handleChange} />
                                             </div>
                                                    
                                                <button className='btn btn-primary' type='button' onClick={nextStep}> Next</button>
                                        </form> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default EmployeeDetailsForm;
