import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';




const employeeData = [
  {
    img:'img/profile-img/avatar-02.png',
    FirstName:'Mark Henry',
    id : 'AKR-001',
    AadharNumber:'1234 4562 1237',
    ParentsName:'matt henry',
    BirthDay: '10-05-1998',
    Gender:'male',
    Marital_Status:'married',
    Email : 'mark@gmail.com',
    Phone : '9874561230'
  },
  {
    img:'img/profile-img/avatar-03.png',
    FirstName:'Sam Billing',
    id : 'AKR-002',
    AadharNumber:'1234 4562 1237',
    ParentsName:'dave ',
    BirthDay: '10-05-1998',
    Gender:'male',
    Marital_Status:'married',
    Email : 'mark@gmail.com',
    Phone : '9994455201'
  },
  {
    img:'img/profile-img/avatar-04.png',
    FirstName:'Brad Don',
    id : 'AKR-003',
    AadharNumber:'1234 4562 1237',
    ParentsName:'jack',
    BirthDay: '30-12-1996',
    Gender:'male',
    Marital_Status:'married',
    Email : 'mark@gmail.com',
    Phone : '8010524870'
  },
  {
    img:'img/profile-img/avatar-05.png',
    FirstName:'Lisa william',
    id : 'AKR-004',
    AadharNumber:'1234 4562 1237',
    ParentsName:'kane williams',
    BirthDay: '20-10-1995',
    Gender:'female',
    Marital_Status:'unmarried',
    Email : 'lisa@gmail.com',
    Phone : '7010608452'
  },
  {
    img:'img/profile-img/avatar-06.png',
    FirstName:'Annie brock',
    id : 'AKR-005',
    AadharNumber:'1234 4562 1237',
    ParentsName:'marshal',
    BirthDay: '10-05-2002',
    Gender:'female',
    Marital_Status:'married',
    Email : 'Annie@gmail.com',
    Phone : '9874561230'
  },
  {
    img:'img/profile-img/avatar-07.png',
    FirstName:'Samantha ronnie',
    id : 'AKR-006',
    AadharNumber:'1234 4562 1237',
    ParentsName:'steve smith',
    BirthDay: '10-08-1998',
    Gender:'female',
    Marital_Status:'married',
    Email : 'samantha@gmail.com',
    Phone : '9874561230'
  },
  {
    img:'img/profile-img/avatar-08.png',
    FirstName:'Brook lee',
    id : 'AKR-007',
    AadharNumber:'1234 4562 1237',
    ParentsName:'lee swan',
    BirthDay: '10-02-1996',
    Gender:'male',
    Marital_Status:'married',
    Email : 'brook@gmail.com',
    Phone : '9874561230'
  },
  {
    img:'img/profile-img/avatar-09.png',
    FirstName:'Tom hadley',
    id : 'AKR-008',
    AadharNumber:'1234 4562 1237',
    ParentsName:'hadley cooper',
    BirthDay: '10-05-1995',
    Gender:'male',
    Marital_Status:'married',
    Email : 'tom@gmail.com',
    Phone : '7774561230'
  },
  {
    img:'img/profile-img/avatar-10.png',
    FirstName:'Will Smith',
    id : 'AKR-009',
    AadharNumber:'1234 4562 1237',
    ParentsName:'smith',
    BirthDay: '10-05-1998',
    Gender:'male',
    Marital_Status:'unmarried',
    Email : 'Willsmith@gmail.com',
    Phone : '9874453252'
  },
  {
    img:'img/profile-img/profile-img.jpg',
    FirstName:'Bill sam',
    id : 'AKR-0010',
    AadharNumber:'1234 4562 1237',
    ParentsName:'sam andrew',
    BirthDay: '02-04-2001',
    Gender:'male',
    Marital_Status:'unmarried',
    Email : 'billsam@gmail.com',
    Phone : '9874561230'
  },
 
 ];

const Registration = () => {
   
 
 
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'FirstName', direction: 'ascending' });
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
      setCurrentPage(1); // Reset to the first page on search
    };
           
    const handleSort = (key) => {
      let direction = 'ascending';
      if (sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };

    const sortedData = [...employeeData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    const filteredData = sortedData.filter((item) =>
      item.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ParentsName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Phone.toLowerCase().includes(searchTerm.toLowerCase()) 
      
      
    );

    const paginatedData = filteredData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <>
    
    <main id="main" className="main" style={{height:"85vh"}}>

    <div className="pagetitle">
      <h1>Registration</h1>
      <nav className='row align-items-center'>
        <div className="col">
        <ol className="breadcrumb py-3">
          <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
          <li className="breadcrumb-item active">Registration</li>
        </ol> 
        </div>
        <div className="col">
          <input type="search" value={searchTerm} placeholder='Search...' className='form-control' aria-label="Sizing example input" onChange={handleSearch}/>
        </div>
        <div className="col-auto float-end ms-auto">
        <div className='View-icons'>
            <a className='grid-view btn btn-link active mx-2' href="#"> <i className="bi bi-grid-3x3-gap-fill"></i></a>
            <a className='grid-view btn btn-link active mx-2' href="#"> <i className="bi bi-justify fs-5"></i></a>
        
            <Link className='btn btn-primary' to='/create-employee'> <i className="bi bi-person-plus-fill pe-2" ></i>Add Employee</Link>
          
        </div>
      
        </div>
      
      </nav>
    </div>

    <section className="section">
      <div className="row">
        <div className="col-lg-12">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Employee Details</h5>
                 
              <div className="row">
               <div className="col-md-12">
                 <div className="table-responsive">
                  <table className="table table-striped table-hover">
                    <thead>
                      <tr>
                        
                        <th scope="col" rowSpan="2" className='text-center' onClick={() => handleSort('FirstName')}> FirstName</th>
                        <th scope="col" className='text-center' onClick={() => handleSort('Employee ID')} >Employee ID</th>
                        <th scope="col" onClick={() => handleSort('AadharNumber')}>AadharNumber</th>
                        <th scope="col" className=' text-center d-none d-sm-table-cell d-md-table-cell' onClick={() => handleSort('ParentsName')}>ParentsName</th>
                        <th scope="col" className=' text-center d-none d-sm-table-cell d-md-table-cell' onClick={() => handleSort('BirthDay')}>BirthDay</th>
                        <th scope="col" className=' text-center d-none d-sm-table-cell d-md-table-cell' onClick={() => handleSort('Gender')}>Gender</th>
                        <th scope="col" className=' text-center d-none d-sm-table-cell d-md-table-cell' onClick={() => handleSort('Marital_Status')}>Marital Status</th>
                        <th scope="col" className=' text-center d-none d-sm-table-cell d-md-table-cell' onClick={() => handleSort('Email')}>Email</th>
                        <th scope="col" className='text-center'>Phone</th>
                        <th scope="col">Action</th>
                   </tr>
                 </thead>
                 <tbody>
                    
                    {paginatedData.map((value,index)=>{
                      return   <tr key={index}>
                    
                        <td colSpan="1" className=''> 
                          <span className='me-2'>
                                <img src={value.img} alt="Profile" className="rounded-circle profile me-1" />
                          </span>
                          {value.FirstName}
                        </td>
                          <td className='td-align'>{value.id}</td>
                          <td className='td-align'>{value.AadharNumber}</td>
                          <td className=" td-align d-none d-sm-table-cell d-md-table-cell">{value.ParentsName}</td>
                          <td className=" td-align d-none d-sm-table-cell d-md-table-cell">{value.BirthDay}</td>
                          <td className=" td-align d-none d-sm-table-cell d-md-table-cell">{value.Gender}</td>
                          <td className=" td-align d-none d-sm-table-cell d-md-table-cell">{value.Marital_Status}</td>
                          <td className=" td-align d-none d-sm-table-cell d-md-table-cell">{value.Email}</td>
                          <td className='td-align'>{value.Phone}</td>
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

export default Registration