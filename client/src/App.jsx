import './App.css'
import { Routes,Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
const Reports = lazy(()=> import ('./ComponentPages/Reports/Reports')) 
const Bonus = lazy(()=> import ('./ComponentPages/Salary/Bonus')) 
const MonthlySalary = lazy(()=> import ('./ComponentPages/Salary/MonthlySalary')) 
const MonthlyAttendance = lazy(()=> import ('./ComponentPages/Attendance/MonthlyAttendance'))
const WeeklyAttendance = lazy(()=> import ('./ComponentPages/Attendance/WeeklyAttendance')) 
const DailyAttendance = lazy(()=>import ('./ComponentPages/Attendance/DailyAttendance')) 
const Portal = lazy(()=> import ('./Components/Portal'))
const Main = lazy(()=> import ('./Components/Main'))
const User = lazy(()=> import ('./ComponentPages/Master/User')) 
const Company  = lazy(()=> import ('./ComponentPages/Master/Company')) 
const Department = lazy(()=> import ('./ComponentPages/Master/Department')) 
const SubDepartment = lazy(()=> import('./ComponentPages/Master/SubDepartment') ) 
const Designation = lazy(()=> import ('./ComponentPages/Master/Designation')) 
const Shift = lazy(()=> import ('./ComponentPages/Master/Shift')) 
const ShiftRoaster = lazy(()=> import ('./ComponentPages/Master/ShiftRoaster')) 
const UserRights = lazy(()=> import ('./ComponentPages/Master/UserRights')) 
const EnquiryDetails = lazy(()=> import ('./ComponentPages/EmployeeDetails/EnquiryDetails')) 
const Registration = lazy(()=> import ('./ComponentPages/EmployeeDetails/Registration')) 
const ManualAttendance = lazy(()=> import ('./ComponentPages/EmployeeDetails/ManualAttendance')) 
const Deductions = lazy(()=> import ('./ComponentPages/EmployeeDetails/Deductions')) 
const Advance = lazy(()=> import ('./ComponentPages/EmployeeDetails/Advance')) 
const Resignation = lazy(()=> import ('./ComponentPages/EmployeeDetails/Resignation')) 
const Settlement = lazy(()=> import ('./ComponentPages/EmployeeDetails/Settlement')) 






function App() {

  
  return (
    <>
 

     <Routes>
          <Route  path='/' element={<Suspense fallback={<></>}> <Portal/> </Suspense>}>
          <Route  index element={<Suspense fallback={<></>}> <Main/> </Suspense>}/>
          <Route  path='/user' element={<Suspense fallback={<></>}> <User/> </Suspense>}/>
          <Route  path='/company' element={<Suspense fallback={<></>}> <Company/> </Suspense>}/>
          <Route  path='/department' element={<Suspense fallback={<></>}> <Department/> </Suspense>}/>
          <Route  path='/subDepartment' element={<Suspense fallback={<></>}> <SubDepartment/> </Suspense>}/>
          <Route  path='/designation' element={<Suspense fallback={<></>}> <Designation/> </Suspense>}/>
          <Route  path='/shift' element={<Suspense fallback={<></>}> <Shift/> </Suspense>}/>
          <Route  path='/shiftRoaster' element={<Suspense fallback={<></>}> <ShiftRoaster/> </Suspense>}/>
          <Route  path='/userRights' element={<Suspense fallback={<></>}> <UserRights/> </Suspense>}/>
          <Route  path='/enquiry-details' element={<Suspense fallback={<></>}> <EnquiryDetails/> </Suspense>}/>
          <Route  path='/registration' element={<Suspense fallback={<></>}> <Registration/> </Suspense>}/>
          <Route  path='/manual-attendance' element={<Suspense fallback={<></>}> <ManualAttendance/> </Suspense>}/>
          <Route  path='/deductions' element={<Suspense fallback={<></>}> <Deductions/> </Suspense>}/>
          <Route  path='/advance' element={<Suspense fallback={<></>}> <Advance/> </Suspense>}/>
          <Route  path='/resignation' element={<Suspense fallback={<></>}> <Resignation/> </Suspense>}/>
          <Route  path='/settlement' element={<Suspense fallback={<></>}>  <Settlement/> </Suspense>}/>
          <Route path='/daily-attendance' element={<Suspense fallback={<></>}> <DailyAttendance/> </Suspense>}/>
          <Route path='/weekly-attendance' element={<Suspense fallback={<></>}> <WeeklyAttendance/> </Suspense>}/>
          <Route  path='/monthly-attendance' element={<Suspense fallback={<></>}> <MonthlyAttendance/> </Suspense>}/>
          <Route path='/salary-details' element={<Suspense fallback={<></>}> <MonthlySalary/></Suspense>}/>
          <Route  path='/bonus' element={<Suspense fallback={<></>}> <Bonus/> </Suspense>}/>
          <Route  path='/report' element={<Suspense fallback={<></>}> <Reports/> </Suspense>}/>
          </Route>
     </Routes>
       
        
        
        
        
    
       
    
    </>
  )
}

export default App
