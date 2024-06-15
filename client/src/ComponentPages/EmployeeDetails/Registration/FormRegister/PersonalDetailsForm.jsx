import React from 'react';

const PersonalDetailsForm = ({ formData, setFormData, nextStep, prevStep }) => {
	const handleChange = (e) => {
		const { name, value } = e.target;
		console.log(e.target);
		setFormData((prev) => ({
			...prev,
			personalDetails: { ...prev.personalDetails, [name]: value },
		}));
	};

	return (
		<>
			<div>
				<h2>Personal Details</h2>
				<div
					className='tab-content pt-2'
					id='borderedTabContent'
				>
					<div
						className={`tab-pane fade ${
							activeTab === 'personal' ? 'show active' : ''
						}`}
						id='bordered-personal'
						role='tabpanel'
						aria-labelledby='personal-tab'
					>
						<form>
							<div className='form-group'>
								<label htmlFor='firstName'>First Name:</label>
								<input
									type='text'
									className='form-control'
									id='firstName'
									name='firstName'
									value={formData.personalDetails.firstName}
									onChange={handleChange}
								/>
							</div>

							<div className='form-group'>
								<label htmlFor='lastName'>Last Name:</label>
								<input
									type='text'
									className='form-control'
									id='lastName'
									name='lastName'
									value={formData.personalDetails.lastName}
									onChange={handleChange}
								/>
							</div>

							<button
								type='button'
								className='btn btn-primary'
								onClick={prevStep}
							>
								Back
							</button>
							<button
								type='button'
								className='btn btn-primary'
								onClick={nextStep}
							>
								Next
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default PersonalDetailsForm;
