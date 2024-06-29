import React, { useEffect, useState } from 'react'
import { Form, Link, redirect, useNavigate, useNavigation } from 'react-router-dom'
import FormRow from '../../../Components/FormRow';
import customFetch from '../../../utils/customFetch';
import Data from '../../../utils/pincode.json';
import CustomSelect from '../../../Components/CustomSelect';



export const action = async ({request})=>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  console.log(data);
  try {
    await customFetch.post(`/companyunit`, data);
    console.log('Form data:', data);
    return redirect('/portal/company');
  } catch (error) {
    console.error('Error submitting form:', error);
    return error;
  }
}




const AddCompanyUnit = () => {

   const [stateApi,setStateApi] = useState([]);
   const [districtApi,setDistrictApi] = useState([]);
   const [error, setError] = useState(null);
   const [selectedState, setSelectedState] = useState('');
   const [selectedDistrict, setSelectedDistrict] = useState('');

    let District = 'District';
    let State =  'State';



  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  useEffect(() => {
     
    const fetchData = async () => {
      try {
        const response = await customFetch.get('/states');
        console.log('Full API response:', response);
        const data = response?.data;
        console.log('API response data:', data);

        if (Array.isArray(data)) {
          setStateApi(data);
        } else {
          throw new Error('State data is not an array');
        }
      } catch (error) {
        console.error('Error fetching state data:', error);
        setStateApi([]);
        setError(error.message || 'Failed to fetch state data');
      }
    };
    
    fetchData(); 
   }, [])

  

   useEffect(() => {
    if (selectedState) {
      console.log(selectedState);
      const fetchDistrictData = async () => {
        try {
       
          
          const response = await customFetch.get(`/districts/${selectedState}`);
          console.log('Full API response:', response);
          const data = response?.data;
          console.log('API response data:', data);

          if (Array.isArray(data)) {
            setDistrictApi(data);
          } else {
            throw new Error('District data is not an array');
          }
        } catch (error) {
          console.error('Error fetching district data:', error);
          setDistrictApi([]);
          setError(error.message || 'Failed to fetch district data');
        }
      };

      fetchDistrictData();
    }
  }, [selectedState]);

  if (error) {
    return <div>Error: {error}</div>;
  }


  if (!Array.isArray(stateApi)) {
    console.error('Expected an array but got:', stateApi);
    return <div>Error: Data is not an array</div>;
  }
   
   if (!Array.isArray(districtApi)) {
    console.error('Expected an array but got:', districtApi);
    return <div>Error: Data is not an array</div>;
  }


  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };
  
  const handleDistrictChange = (event)=>{
    setSelectedDistrict(event.target.value)
  };

  return (
    <>
    
    <main id="main" class="main" style={{height:"85vh"}}>

<div className="pagetitle">
 <h1>Company Unit</h1>
 <nav className='row align-items-center'>
   <div className="col">
   <ol className="breadcrumb py-3">
     <li className="breadcrumb-item"><Link to='/portal/company'>CompanyUnit</Link></li>
     <li className="breadcrumb-item active">AddCompanyUnit</li>
   </ol> 
   </div>
   
 
 </nav>
</div>

<section class="section">
 <div class="row">
   <div class="col-lg-12">

    
         <div className="row">
          <div className="col-md-10">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Create Company Unit </h5>

              <Form method='post' className="row g-3">
              
                <div class="col-md-6">
                <FormRow type='text' name='CmpId'  />
                </div>
                <div class="col-md-6">
                <FormRow type='text' name='UnitName'  />
                </div>
                <div class="col-md-4">
                <FormRow type='text' name='Dno_Street'  />
                </div>
                <div class="col-md-4">
                <FormRow type='text' name='Nagar'  />
                </div>
                <div class="col-md-4">
                <FormRow type='text' name='Village'  />
                </div>
                <div class="col-md-3">
                <FormRow type='text' name='Taluk'  />
                </div>
                <div class="col-md-4">
    
                  <label htmlFor="District" class="form-label">
                   District</label>
                   <CustomSelect  Data={Data} DataValue ={District}/>
                  {/* <select id="district" name='District'  class="form-select"  >
                    <optgroup>
                    <option selected>Choose...</option>
                    {Data.map((value,index)=>{
                      return <option key={index} value={value.District}>
                         {value.District}
                      </option>
                    })}
                    </optgroup>
                  </select> */}
                </div>
                <div class="col-md-4">
                <label htmlFor="State"  class="form-label">State</label>
                <CustomSelect  Data={Data} DataValue ={State}/>

                  {/* <select id="State" name='State' class="form-select">
                  <optgroup>
                  <option selected>Choose...</option>
                    {stateApi.map((value,index)=>{
                      return <option key={index} value={value.id}>
                         {value.name}
                      </option>
                    })}
                  </optgroup>
                  </select> */}
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

export default AddCompanyUnit