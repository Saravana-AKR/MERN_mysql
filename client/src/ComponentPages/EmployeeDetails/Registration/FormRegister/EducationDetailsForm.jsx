import React from 'react'

const EducationDetailsForm = ({formData,setFormData,prevStep, handleSubmit}) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, educationDetails: { ...prev.educationDetails, [name]: value } }));
      };

  return (
    <>
         <div>
      <h2>Education Details</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
            <label htmlFor="degree">Degree:</label>
            <input type="text" className='form-control' id='degree' name="degree" value={formData.educationDetails.degree} onChange={handleChange} />
        </div>
        
        <div className="form-group">
            <label htmlFor="university">University:</label>
            <input type="text" className='form-control' id='university' name="university" value={formData.educationDetails.university} onChange={handleChange} />
        </div>
       
        <button type="button" className='btn btn-primary' onClick={prevStep}>Back</button>
        <button type="submit" className='btn btn-primary' >Submit</button>
      </form>
    </div>
    </>
  )
}

export default EducationDetailsForm