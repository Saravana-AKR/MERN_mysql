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
          <Route  path='/UserRights' element={<UserRights/>}/>
          </Route>
     </Routes>
       
        
        
        
        
    
       
    
    </>
  )
}

export default App
