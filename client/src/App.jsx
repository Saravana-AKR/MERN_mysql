import './App.css'
import { Routes,Route } from "react-router-dom";
import Portal from './Components/Portal';
import Main from './Components/Main';
import User from './ComponentPages/Master/User';
import Company from './ComponentPages/Master/Company';
import Department from './ComponentPages/Master/Department';
import SubDepartment from './ComponentPages/Master/SubDepartment';
import Designation from './ComponentPages/Master/Designation';
import Shift from './ComponentPages/Master/Shift';
import ShiftRoaster from './ComponentPages/Master/ShiftRoaster';
import UserRights from './ComponentPages/Master/UserRights';
import EnquiryDetails from './ComponentPages/EmployeeDetails/EnquiryDetails';
import Registration from './ComponentPages/EmployeeDetails/Registration';
import ManualAttendance from './ComponentPages/EmployeeDetails/ManualAttendance';
import Deductions from './ComponentPages/EmployeeDetails/Deductions';
import Advance from './ComponentPages/EmployeeDetails/Advance';
import Resignation from './ComponentPages/EmployeeDetails/Resignation';
import Settlements from './ComponentPages/EmployeeDetails/Settlements';




function App() {

  
  return (
    <>
 

     <Routes>
          <Route  path='/' element={<Portal/>}>
          <Route  index element={<Main/>}/>
          <Route  path='/user' element={<User/>}/>
          <Route  path='/company' element={<Company/>}/>
          <Route  path='/department' element={<Department/>}/>
          <Route  path='/subDepartment' element={<SubDepartment/>}/>
          <Route  path='/designation' element={<Designation/>}/>
          <Route  path='/shift' element={<Shift/>}/>
          <Route  path='/shiftRoaster' element={<ShiftRoaster/>}/>
          <Route  path='/userRights' element={<UserRights/>}/>
          <Route  path='/enquiry-details' element={<EnquiryDetails/>}/>
          <Route  path='/registration' element={<Registration/>}/>
          <Route  path='/manual-attendance' element={<ManualAttendance/>}/>
          <Route  path='/deductions' element={<Deductions/>}/>
          <Route  path='/advance' element={<Advance/>}/>
          <Route  path='/resignation' element={<Resignation/>}/>
          <Route  path='/settlement' element={<Settlements/>}/>
          </Route>
     </Routes>
       
        
        
        
        
    
       
    
    </>
  )
}

export default App
