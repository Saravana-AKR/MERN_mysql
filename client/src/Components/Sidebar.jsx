import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    
  <aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item my-4">
      <Link className="nav-link " to="/">
        <i className="bi bi-grid-fill" />
        <span>Dashboard</span>
      </Link>
    </li>
    <li className="nav-item my-4">
      <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-menu-button-wide-fill" /><span>Master</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <Link to='user' className='d-flex  align-items-center '>
          {/* <i class="bi bi-caret-right-fill" style={{fontSize:"14px"}}/><span>User</span> */}
          <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>User</span>
          </Link>
        </li>
        <li>
          <Link to='company'>
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Company</span>
          </Link>
        </li>
        <li>
          <Link to='department'>
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Department</span>
          </Link>
        </li>
        <li>
          <Link to='subDepartment'>
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Sub Department</span>
          </Link>
        </li>
        <li>
          <Link to='designation'>
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Designation</span>
          </Link>
        </li>
        <li>
          <Link to='shift'>
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Shift</span>
          </Link>
        </li>
        <li>
          <Link to='shiftRoaster'>
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Shift Roaster</span>
          </Link>
        </li>
        <li>
          <Link to='userRights'>
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>User rights</span>
          </Link>
        </li>
    
      </ul>
    </li>
    <li className="nav-item my-4">
      <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-journal-bookmark-fill" /><span>Employee Details</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <Link to='enquiry-details'>
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Enquiry Details</span>
          </Link>
        </li>
        <li>
          <Link to='registration'>
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Registration</span>
          </Link>
        </li>
        <li>
          <Link to='manual-attendance'>
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Manual Attendance</span>
          </Link>
        </li>
        <li>
          <Link to='deductions'>
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Deductions</span>
          </Link>
        </li>
        <li>
          <Link to='advance'>
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Advance</span>
          </Link>
        </li>
        <li>
          <Link to='resignation'>
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Resignation</span>
          </Link>
        </li>
        <li>
          <Link to='settlement'>
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Settlement</span>
          </Link>
        </li>
      </ul>
    </li>
    <li className="nav-item my-4">
      <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-layout-text-window-reverse" /><span>Attendance</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <Link to="daily-attendance">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Daily Attendance</span>
          </Link>
        </li>
        <li>
          <Link to="weekly-attendance">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Weekly Attendance</span>
          </Link>
        </li>
        <li>
          <Link to="monthly-attendance">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Monthly Attendance</span>
          </Link>
        </li>
      </ul>
    </li>
    <li className="nav-item my-4">
      <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-currency-rupee" /><span>Salary</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <Link to="salary-details">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Salary Details</span>
          </Link>
        </li>
        <li>
          <Link to="bonus">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Bonus Details</span>
          </Link>
        </li>
      
      </ul>
    </li>
    <li className="nav-item my-4">
      <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-file-earmark-fill" /><span>Reports</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <Link to="report">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Reports</span>
          </Link>
        </li>
       
      </ul>
    </li>

  
  </ul>
</aside>

    </>
  )
}

export default Sidebar