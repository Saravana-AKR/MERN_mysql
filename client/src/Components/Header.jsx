import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import brandLogo from '../assets/brand-logo.png';




const Header = () => {
    const [isSidebarToggled, setIsSidebarToggled] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarToggled(!isSidebarToggled);
    };

    if (isSidebarToggled) {
        document.body.classList.add('toggle-sidebar');
      } else {
        document.body.classList.remove('toggle-sidebar');
      }

      
  return (
    <>
  <header id="header" className="header fixed-top d-flex align-items-center">
  <div className="d-flex align-items-center justify-content-between">
    <a href="index.html" className="logo d-flex align-items-center">
      <img src={brandLogo} alt = 'profileLogo' />
      <span className="px-3 d-none d-lg-block"></span>
    </a>
    <i className="bi bi-list toggle-sidebar-btn"  style={{ color: '#1990CC' }} 
        onClick={toggleSidebar} />
  </div>
   

  <nav className="header-nav ms-auto">
    <ul className="d-flex align-items-center">
      
      {/* <li className="nav-item dropdown pe-3">
        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
          <img src="img/profile-img.jpg" alt="Profile" className="rounded-circle" />
          <span className="d-none d-md-block dropdown-toggle ps-2">Admin</span>
        </a>
        
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
          <li className="dropdown-header">
            <h6>Kevin Anderson</h6>
            <span>Web Designer</span>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
              <i className="bi bi-person" />
              <span>My Profile</span>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
              <i className="bi bi-gear" />
              <span>Account Settings</span>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
              <i className="bi bi-question-circle" />
              <span>Need Help?</span>
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <i className="bi bi-box-arrow-right" />
              <span>Sign Out</span>
            </a>
          </li>
        </ul>
      </li> */}
           <Dropdown className="nav-item dropdown pe-3">
                  <Dropdown.Toggle className="nav-link nav-profile d-flex align-items-center pe-0" variant='white' id="dropdown-basic">
                  <img src="/img/profile-img/profile-img.jpg" alt="Profile" className="rounded-circle" />
                  <span className="d-none d-md-block  ps-2">Admin</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                  
                      <Dropdown.Item ><Link to='/'>Logout</Link></Dropdown.Item>
                     
                  </Dropdown.Menu>
             </Dropdown>
    </ul>
  </nav>
</header>

    </>
  )
}

export default Header