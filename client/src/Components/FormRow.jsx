import React from 'react';

const FormRow = ({ type, name, labelText, defaultValue = '' }) => {
	return (
		<>
		
				<label
					htmlFor={name}
					className='form-label'
				>
					{labelText || name}
				</label>
				<input
					type={type}
					id={name}
					name={name}
					className='form-control'
					defaultValue={defaultValue}
					required
				/>
			
		</>
	);
};

export default FormRow;
