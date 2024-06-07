import React from 'react'

const Sidebar = () => {
  return (
    <>
    
  <aside id="sidebar" className="sidebar">
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="nav-item my-4">
      <a className="nav-link " href="#">
        <i className="bi bi-grid-fill" />
        <span>Dashboard</span>
      </a>
    </li>
    <li className="nav-item my-4">
      <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-menu-button-wide-fill" /><span>Master</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="#" className='d-flex  align-items-center '>
          {/* <i class="bi bi-caret-right-fill" style={{fontSize:"14px"}}/><span>User</span> */}
          <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>User</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Company</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Department</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Sub Department</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Designation</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Shift</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Shift Roaster</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>User rights</span>
          </a>
        </li>
    
      </ul>
    </li>
    <li className="nav-item my-4">
      <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-journal-bookmark-fill" /><span>Employee Details</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="#">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Enquiry Details</span>
            

          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Registration</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Manual Attendance</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Deductions</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Advance</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Resignation</span>
          </a>
        </li>
        <li>
          <a href="forms-validation.html">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Settlement</span>
          </a>
        </li>
      </ul>
    </li>
    <li className="nav-item my-4">
      <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-layout-text-window-reverse" /><span>Attendance</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="tables-general.html">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Daily Attendance</span>
          </a>
        </li>
        <li>
          <a href="tables-data.html">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Weekly Attendance</span>
          </a>
        </li>
        <li>
          <a href="tables-data.html">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Monthly Attendance</span>
          </a>
        </li>
      </ul>
    </li>
    <li className="nav-item my-4">
      <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-currency-rupee" /><span>Salary</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="charts-chartjs.html">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Salary Details</span>
          </a>
        </li>
        <li>
          <a href="charts-apexcharts.html">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Bonus Details</span>
          </a>
        </li>
      
      </ul>
    </li>
    <li className="nav-item my-4">
      <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-file-earmark-fill" /><span>Reports</span><i className="bi bi-chevron-down ms-auto" />
      </a>
      <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
          <a href="icons-bootstrap.html">
            <i class="bi bi-chevron-right" style={{fontSize:"14px"}}/><span>Reports</span>
          </a>
        </li>
       
      </ul>
    </li>

  
  </ul>
</aside>

    </>
  )
}

export default Sidebar