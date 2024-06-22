import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import customFetch from '../../utils/customFetch';



// const employeeData = [
//   {
   
//     CmpId:'U3Emb',
//     UnitName : 'Fresco NY Private Limited',
//     Dno_Street:'520,PUDHUR PIRIVU',
//     Nagar:'Mummoorthy Nagar',
//     Village: 'DHARAPURAM ROAD,',
//     Taluk:'Tirupur',
//     District:'Tirupur',
//     State : 'TamilNadu',
//     Pin_code : '641605',
//     Delflag :'1'
//   },
//   {
    
//     CmpId:'Canteen',
//     UnitName : 'AKR Industries Pvt.Ltd Canteen',
//     Dno_Street:'2/385G',
//     Nagar:'Mummoorthy Nagar',
//     Village: 'PN Road ',
//     Taluk:'Tirupur',
//     District:'Tirupur',
//     State : 'TamilNadu',
//     Pin_code : '641602',
//     Delflag :'1'
//   },
//   {
  
//     CmpId:'UR',
//     UnitName : 'UrGear',
//     Dno_Street:'S.F. No.2/385-G, ',
//     Nagar:'Mummoorthy Nagar',
//     Village: 'PN Road ',
//     Taluk:'Tirupur',
//     District:'Tirupur',
//     State : 'TamilNadu',
//     Pin_code : '641602',
//     Delflag :'0'
//   },
//   {
    
//     CmpId:'Fresco-BLR',
//     UnitName : 'Fresco NY Private Limited-BLR',
//     Dno_Street:'',
//     Nagar:'',
//     Village: '',
//     Taluk:'',
//     District:'',
//     State : 'Karnataka',
//     Pin_code : '',
//     Delflag :'1'
//   },
//   {
   
//     CmpId:'Mg-1',
//     UnitName : 'Management',
//     Dno_Street:'S.F. No.2/385-G,',
//     Nagar:'Mummoorthy Nagar',
//     Village: ' P.N. Road,',
//     Taluk:'Tirupur',
//     District:'Tirupur',
//     State : 'TamilNadu',
//     Pin_code : '641602',
//     Delflag :'0'
//   },
//   {
   
//     CmpId:'Mb102',
//     UnitName : 'Fresco NY Private Limited-cul',
//     Dno_Street:'195',
//     Nagar:'GN Nagar',
//     Village: 'Bandan ROAD,',
//     Taluk:'',
//     District:'Nallur',
//     State : 'AndraPradesh',
//     Pin_code : '566556',
//     Delflag :'1'
//   },
//   {
    
//     CmpId:'And454',
//     UnitName : 'Fresco NY Private Limited-andra',
//     Dno_Street:'520',
//     Nagar:'Jp Nagar',
//     Village: 'New Village',
//     Taluk:'kadappa',
//     District:'visag',
//     State : 'AndraPradesh',
//     Pin_code : '566725',
//     Delflag :'0'
//   },
  
 
//  ];





const Company = () => {

  const [companyApi,setCompanyApi] = useState([]);

  const [searchCompanyTerm, setSearchCompanyTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'UnitName ', direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSearch = (event) => {
    setSearchCompanyTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };
         
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  

  const sortedData = (data) => {
    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  };

  const filteredData = (data) => {
    return data.filter((item) =>
      item.Cmpid.toLowerCase().includes(searchCompanyTerm.toLowerCase()) ||
      item.UnitName.toLowerCase().includes(searchCompanyTerm.toLowerCase()) ||
      item.Nagar.toLowerCase().includes(searchCompanyTerm.toLowerCase()) ||
      item.Village.toLowerCase().includes(searchCompanyTerm.toLowerCase()) ||
      item.Taluk.toLowerCase().includes(searchCompanyTerm.toLowerCase()) ||
      item.District.toLowerCase().includes(searchCompanyTerm.toLowerCase()) ||
      item.State.toLowerCase().includes(searchCompanyTerm.toLowerCase()) ||
      item.Pin_code.toLowerCase().includes(searchCompanyTerm.toLowerCase()) ||
      item.Delflag.toLowerCase().includes(searchCompanyTerm.toLowerCase())
    );
  };

  const paginatedData = (data) => {
    return data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  };

  const pageCount = (data) => {
    return Math.ceil(data.length / itemsPerPage);
  };


   useEffect(() => {
     
    const fetchData = async()=>{
           try {
            const response = await customFetch.get('/companyunit');
            // console.log('Full API response:', response);
            // console.log('API response data:', response.data);
            const sortedApiData = sortedData(response.data); // Sort the data initially
             setCompanyApi(sortedApiData);
           } catch (error) {
            console.error('Error fetching data:', error);
           }
    }
    
    fetchData(); 
   }, [])
    
   if (!Array.isArray(companyApi)) {
    console.error('Expected an array but got:', companyApi);
    return <div>Error: Data is not an array</div>;
  }
    
  const currentData = paginatedData(filteredData(sortedData(companyApi)));
  // console.log(currentData);
     
  return (
    <>
     <main id="main" class="main" style={{height:"85vh"}}>

     <div className="pagetitle">
      <h1>Company Unit</h1>
      <nav className='row align-items-center'>
        <div className="col">
        <ol className="breadcrumb py-3">
          <li className="breadcrumb-item"><Link to='/portal'>Home</Link></li>
          <li className="breadcrumb-item active">Company page</li>
        </ol> 
        </div>
        <div className="col">
          <input type="search" value={searchCompanyTerm} placeholder='Search...' className='form-control' aria-label="Sizing example input" onChange={handleSearch}/>
        </div>
        <div className="col-auto float-end ms-auto">
        <div className='View-icons'>
            <a className='grid-view btn btn-link active mx-2' href="#"> <i className="bi bi-grid-3x3-gap-fill"></i></a>
            <a className='grid-view btn btn-link active mx-2' href="#"> <i className="bi bi-justify fs-5"></i></a>
        
            <Link className='btn btn-primary' to='addCompanyUnit'> <i className="bi bi-person-plus-fill pe-2" ></i>Add Unit</Link>
          
        </div>
      
        </div>
      
      </nav>
    </div>

    <section class="section">
      <div class="row">
        <div class="col-lg-12">

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Company Unit Details</h5>
              <div className="row">
               <div className="col-md-12">
                 <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        
                        <th scope="col" rowSpan="2" className='text-center' onClick={() => handleSort('CmpId')}> CmpId</th>
                        <th scope="col" className='text-center' onClick={() => handleSort('UnitName')} >UnitName</th>
                        <th scope="col" className=' text-center d-none d-sm-table-cell d-md-table-cell' onClick={() => handleSort('Dno_Street')}>Dno_Street</th>
                        <th scope="col" className=' text-center d-none d-sm-table-cell d-md-table-cell' onClick={() => handleSort('Nagar')}>Nagar</th>
                        <th scope="col" className=' text-center d-none d-sm-table-cell d-md-table-cell' onClick={() => handleSort('Village')}>Village</th>
                        <th scope="col" className=' text-center d-none d-sm-table-cell d-md-table-cell' onClick={() => handleSort('Taluk')}>Taluk</th>
                        <th scope="col" className=' text-center d-none d-sm-table-cell d-md-table-cell' onClick={() => handleSort('District')}>District</th>
                        <th scope="col" className=' text-center d-none d-sm-table-cell d-md-table-cell' onClick={() => handleSort('State')}>State</th>
                        <th scope="col" className='text-center d-none d-sm-table-cell d-md-table-cell' onClick={() => handleSort('Pin_code')}>Pin_code</th>
                        <th scope="col" className='text-center'onClick={() => handleSort('delflag')} >Delflag</th>
                        <th scope="col">Action</th>
                   </tr>
                 </thead>
                 <tbody>
                    
                    {currentData.map((value,index)=>{
                      const {Cmpid,UnitName,Dno_Street,Nagar,Village,Taluk,District,State,Pin_code,Delflag} = value
                      return   <tr key={index}>
                           
                        {/* <td colSpan="1" className=''> 
                          <span className='me-2'>
                                <img src="" alt="Profile" className="rounded-circle profile me-1" />
                          </span>
                          {value.FirstName}
                        </td> */}
                          {/* <td className='td-align'>{value.id}</td> */}
                          <td className='td-align'>{Cmpid}</td>
                          <td className=" td-align ">{UnitName}</td>
                          <td className=" td-align d-none d-sm-table-cell d-md-table-cell">{Dno_Street}</td>
                          <td className=" td-align d-none d-sm-table-cell d-md-table-cell">{Nagar}</td>
                          <td className=" td-align d-none d-sm-table-cell d-md-table-cell">{Village}</td>
                          <td className=" td-align d-none d-sm-table-cell d-md-table-cell">{Taluk}</td>
                          <td className=" td-align d-none d-sm-table-cell d-md-table-cell">{District}</td>
                          <td className=" td-align d-none d-sm-table-cell d-md-table-cell">{State}</td>
                          <td className=" td-align d-none d-sm-table-cell d-md-table-cell">{Pin_code}</td>
                          <td className='td-align'>{Delflag}</td>
                          <td> 
                            <a href="#" >
                              <Dropdown className="filter">
                                         <Dropdown.Toggle className="icon" variant='white' id="dropdown-basic">
                                         <i className="bi bi-three-dots-vertical"/>
                                          </Dropdown.Toggle>
    
                                       <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                       <Dropdown.Item href="#/action-1"> <i className="bi bi-pencil-fill text-info"/> Edit</Dropdown.Item>
                                       <Dropdown.Item href="#/action-2"> <i className="bi bi-trash-fill text-danger"/> Delete</Dropdown.Item>
                                    
                                     </Dropdown.Menu>
                                  </Dropdown>
                              </a>
                          </td>
                        </tr> 
                    })}

                      </tbody>
                    </table>
                  </div>
                </div>
               </div>
             

            </div>
          </div>

        </div>

       

      </div>

      <div className="row">
      <div className="mb-4">
        <div className="d-flex justify-content-end my-1">
          Showing {currentPage} to {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} entries
        </div>
        <div className="d-flex justify-content-end gap-2">
          <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1} className='btn btn-primary'>
            First
          </button>
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className='btn btn-primary'>
            Previous
          </button>
          {[...Array(pageCount).keys()].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page + 1)}
              className={currentPage === page + 1 ? 'active active-page' : ''}
              style={{backgroundColor:"rgb(202, 202, 202)",color:"white",border:"none",fontSize:"1.2rem",padding:"0.2rem 0.5rem",borderRadius:"0.5rem"}}
            >
              {page + 1}
            </button>
          ))}
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === pageCount} className='btn btn-primary'>
            Next
          </button>
          <button onClick={() => setCurrentPage(pageCount)} disabled={currentPage === pageCount} className='btn btn-primary'>
            Last
          </button>
        </div>
      </div>
      </div>
    </section>

   </main>
    
    </>
  )
}

export default Company