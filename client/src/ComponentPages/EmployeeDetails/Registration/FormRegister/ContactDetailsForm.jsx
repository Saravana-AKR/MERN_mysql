import React from 'react'

const ContactDetailsForm = ({formData,setFormData,nextStep, prevStep}) => {
  
     const handleChange = (e) => {
          const {name, value} = e.target;
          console.log(e.target);
          setFormData((prev)=>({...prev,contactDetails:{...prev.contactDetails,[name]:value}}));
     };

  return (
    <>
       <div>
         <h2>Contact Details</h2>
          <form >
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" className="form-control" id="phone" name="phone" value={formData.contactDetails.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" name="email" value={formData.contactDetails.email} onChange={handleChange} />
            </div>
            <button type="button" className='btn btn-primary' onClick={prevStep}>Back</button>
            <button type="button" className='btn btn-primary' onClick={nextStep}>Next</button>
          </form>
       </div>
    
    </>
  )
}

export default ContactDetailsForm