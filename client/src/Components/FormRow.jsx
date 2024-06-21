import React from 'react';

const FormRow = ({ type, name, labelText, defaultValue = '',}) => {
	   const word  = name;
	   const labelName = word.charAt(0).toUpperCase()+word.slice(1)
	return (
		<>
		
				<label
					htmlFor={name}
					className='form-label'
				>
					{labelText || labelName}
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
