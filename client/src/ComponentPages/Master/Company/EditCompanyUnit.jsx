import React from 'react'
import { Form, Link, redirect, useNavigate, useNavigation } from 'react-router-dom'
import FormRow from '../../../Components/FormRow';
import customFetch from '../../../utils/customFetch';
import { useParams } from "react-router-dom";




export const action = async ({ request }) => {
    
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const { id } = data;
    // console.log(data);
    // console.log(data.id);
    try {
      await customFetch.patch(`/companyunit/${ id }`, data); // Assuming the `id` is part of the form data
      console.log('Form data:', data);
      return redirect('/portal/company');
    } catch (error) {
      console.error('Error updating form:', error);
      return error;
    }
  }




const EditCompanyUnit = () => {

    const { id } = useParams();
    // console.log(useParams());

   

    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';
    
  return (
    <>
     
     <main id="main" class="main" style={{height:"85vh"}}>

<div className="pagetitle">
 <h1>Company Unit</h1>
 <nav className='row align-items-center'>
   <div className="col">
   <ol className="breadcrumb py-3">
     <li className="breadcrumb-item"><Link to='/portal/company'>CompanyUnit</Link></li>
     <li className="breadcrumb-item active">EditCompanyUnit</li>
   </ol> 
   </div>
   
 
 </nav>
</div>

<section class="section">
 <div class="row">
   <div class="col-lg-12">

    
         <div className="row">
          <div className="col-md-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Edit Company Unit</h5>

              <Form method='post' className="row g-3">
              
                <div class="col-md-12">
                <input type="hidden" name="id" value={id} />
            
                 {/* Hidden field for ID */}
                <FormRow type='text' name='CmpId'  />
                </div>
                <div class="col-md-12">
                <FormRow type='text' name='UnitName'  />
                </div>
                <div class="col-md-6">
                <FormRow type='text' name='Dno_Street'  />
                </div>
                <div class="col-md-6">
                <FormRow type='text' name='Nagar'  />
                </div>
                <div class="col-md-6">
                <FormRow type='text' name='Village'  />
                </div>
                <div class="col-md-6">
                <FormRow type='text' name='Taluk'  />
                </div>
                <div class="col-md-4">
                <FormRow type='text' name='District'  />
                </div>
                <div class="col-md-4">
                <FormRow type='text' name='State'  />
                </div>
                <div class="col-md-2">
                <FormRow type='text' name='Pin_code'  />
                </div>
                <div class="col-md-2">
                <FormRow type='text' name='Delflag'  />
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary me-3" disabled={isSubmitting}>   {isSubmitting ? 'submitting...' : 'submit'}</button>
                  <button type="reset" class="btn btn-secondary">Reset</button>
                </div>
                </Form>

            </div>
          </div>
             
          </div>
         </div>
    

  
   </div>
 </div>

</section>

</main>
    
    </>
  )
}

export default EditCompanyUnit