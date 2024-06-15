import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeDetailsForm from './FormRegister/EmployeeDetailsForm';
import PersonalDetailsForm from './FormRegister/PersonalDetailsForm';
import ContactDetailsForm from './FormRegister/ContactDetailsForm';
import EducationDetailsForm from './FormRegister/EducationDetailsForm';

const CreateEmployee = () => {
	const [activeTab, setActiveTab] = useState('home');

	const [step, setStep] = useState(1);

	const [formData, setFormData] = useState({
		employeeDetails: { employeeId: '', department: '' },
		personalDetails: { firstName: '', lastName: '' },
		contactDetails: { phone: '', email: '' },
		educationDetails: { degree: '', university: '' },
	});

	const nextStep = () => setStep((prevStep) => prevStep + 1);
	const prevStep = () => setStep((prevStep) => prevStep - 1);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form Data Submitted:', formData);
		// Here you can handle the submission, e.g., sending data to an API
	};

	const renderForm = () => {
		switch (step) {
			case 1:
				return (
					<EmployeeDetailsForm
						formData={formData}
						setFormData={setFormData}
						nextStep={nextStep}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
				);
			case 2:
				return (
					<PersonalDetailsForm
						formData={formData}
						setFormData={setFormData}
						nextStep={nextStep}
						prevStep={prevStep}
					/>
				);
			case 3:
				return (
					<ContactDetailsForm
						formData={formData}
						setFormData={setFormData}
						nextStep={nextStep}
						prevStep={prevStep}
					/>
				);
			case 4:
				return (
					<EducationDetailsForm
						formData={formData}
						setFormData={setFormData}
						prevStep={prevStep}
						handleSubmit={handleSubmit}
					/>
				);
			default:
				return (
					<EmployeeDetailsForm
						formData={formData}
						setFormData={setFormData}
						nextStep={nextStep}
					/>
				);
		}
	};

	return (
		<>
			<main
				id='main'
				className='main'
				style={{ height: '85vh' }}
			>
				<div className='pagetitle'>
					<h1>Registration</h1>
					<nav className='row align-items-center'>
						<div className='col'>
							<ol className='breadcrumb py-3'>
								<li className='breadcrumb-item'>
									<Link to='/'>Home</Link>
								</li>
								<li className='breadcrumb-item'>
									<Link to='/registration'>Registration</Link>
								</li>
								<li className='breadcrumb-item active'>Create Employee</li>
							</ol>
						</div>
					</nav>
				</div>

				<section className='section'>
					<div className='row'>
						<div className='col-lg-12'>
							<div className='card'>
								<div className='card-body'>
									<h5 className='card-title'>
										<ul
											className='nav nav-tabs nav-tabs-bordered px-5 ms-5'
											id='borderedTab'
											role='tablist'
										>
											<li
												className='nav-item'
												role='presentation'
											>
												<button
													className={`nav-link ${
														activeTab === 'home' ? 'active' : ''
													}`}
													id='home-tab'
													data-bs-toggle='tab'
													data-bs-target='#bordered-home'
													type='button'
													role='tab'
													aria-controls='home'
													aria-selected={activeTab === 'home'}
													onClick={() => setActiveTab('home')}
												>
													Employee
												</button>
											</li>
											<li
												className='nav-item'
												role='presentation'
											>
												<button
													className={`nav-link ${
														activeTab === 'personal' ? 'active' : ''
													}`}
													id='personal-tab'
													data-bs-toggle='tab'
													data-bs-target='#bordered-personal'
													type='button'
													role='tab'
													aria-controls='personal'
													aria-selected={activeTab === 'personal'}
													onClick={() => setActiveTab('personal')}
												>
													personal
												</button>
											</li>
											<li
												className='nav-item'
												role='presentation'
											>
												<button
													className={`nav-link ${
														activeTab === 'contact' ? 'active' : ''
													}`}
													id='contact-tab'
													data-bs-toggle='tab'
													data-bs-target='#bordered-contact'
													type='button'
													role='tab'
													aria-controls='contact'
													aria-selected={activeTab === 'contact'}
													onClick={() => setActiveTab('contact')}
												>
													Manager
												</button>
											</li>
										</ul>
									</h5>

									<div className='row'>
										<div className='col-md-12'>{renderForm()}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default CreateEmployee;

{
	/* <div class="modal fade" id="modalDialogScrollable" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                  <div class="modal-content bg-info-subtle text-dark">
                    <div class="modal-header">
                      <h5 class="modal-title">Add Employee</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" >
                      <form >
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="input-block mb-3">
                                    <label htmlFor="" className="col-form-label">
                                        FirstName <span className='text-danger'>*</span>
                                    </label>
                                    
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                 <div className="input-block mb-3">
                                    <label htmlFor="" className="col-form-label">
                                        FirstName <span className='text-danger'>*</span>
                                    </label>
                                    
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                            </div>
                            <div className="col-sm-6"></div>
                            <div className="col-sm-6"></div>
                            <div className="col-sm-6"></div>
                            <div className="col-sm-6"></div>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary text-light">Submit</button>
                    </div>
                  </div>
                </div>
              </div> */
}
