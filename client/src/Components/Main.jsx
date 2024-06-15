import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import PieChartHome from './Pie chart/PieChartHome';
import BarChartHome from './Bar chart/BarChartHome';




const Main = () => {
  return (
    <>
   <div>
  <main id="main" className="main">
    <div className="pagetitle">
      <h1 className='py-2'>Dashboard</h1>
      <nav>
       
      </nav>
    </div>
    <section className="section dashboard">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card sales-card">
              <Dropdown className="filter">
                  <Dropdown.Toggle className="icon" variant='white' id="dropdown-basic">
                  <i className="bi bi-three-dots" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
             </Dropdown>
                <div className="card-body">
                  <h5 className="card-title">Live <span>| Employees</span></h5>
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      
                      <i className="bi bi-person-lines-fill"/>
                    </div>
                    <div className="ps-3">
                      <h6>145</h6>
                      <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card revenue-card">
              <Dropdown className="filter">
                <Dropdown.Toggle className="icon" variant='white' id="dropdown-basic">
                   <i className="bi bi-three-dots" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
                <div className="card-body">
                  <h5 className="card-title">Today Labour <span>| Strength</span></h5>
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    
                      <i className="bi bi-person-workspace"/>
                    </div>
                    <div className="ps-3">
                      <h6>3,264</h6>
                      <span className="text-success small pt-1 fw-bold">8%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-12">
              <div className="card info-card customers-card">
              <Dropdown className="filter">
              <Dropdown.Toggle className="icon" variant='white' id="dropdown-basic">
              <i className="bi bi-three-dots" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
             </Dropdown>
                <div className="card-body">
                  <h5 className="card-title">Today Staff <span>| Strength</span></h5>
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-people" />
                    </div>
                    <div className="ps-3">
                      <h6>1244</h6>
                      <span className="text-danger small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">decrease</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            <div className="col-12">
              <div className="card pending-task overflow-auto">
              <Dropdown className="filter">
              <Dropdown.Toggle className="icon" variant='white' id="dropdown-basic">
              <i className="bi bi-three-dots" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
                <div className="card-body">
                  <h5 className="card-title">Pending Task <span>| Today</span></h5>
                  <table className="table table-borderless datatable">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Staff Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Department</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"><a href="#">#2457</a></th>
                        <td>Babu</td>
                        <td><a href="#" className="text-primary">Get Order Approval</a></td>
                        <td>Accounts</td>
                        <td><span className="badge bg-success">Approved</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2147</a></th>
                        <td>Anwar</td>
                        <td><a href="#" className="text-primary">Schedule Meeting</a></td>
                        <td>Documentation</td>
                        <td><span className="badge bg-warning">Pending</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2049</a></th>
                        <td>Sheela</td>
                        <td><a href="#" className="text-primary">Submit the order Report</a></td>
                        <td>ERP</td>
                        <td><span className="badge bg-success">Approved</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2644</a></th>
                        <td>Guna Sekar</td>
                        <td><a href="#" className="text-primar">Schedule buyer Meeting</a></td>
                        <td>Fabric</td>
                        <td><span className="badge bg-danger">Rejected</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2644</a></th>
                        <td>Prabha</td>
                        <td><a href="#" className="text-primary">Close Call  Client work</a></td>
                        <td>Quality</td>
                        <td><span className="badge bg-success">Approved</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-sm-6">
              <div className="card top-selling overflow-auto">
              <Dropdown className="filter">
                  <Dropdown.Toggle className="icon" variant='white' id="dropdown-basic">
                  <i className="bi bi-three-dots" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
             </Dropdown>
                <div className="card-body pb-0">
                  <h5 className="card-title">Today Hostel <span>| Strength</span></h5> 
                 
                  <PieChartHome/>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-sm-6">
              <div className="card top-selling overflow-auto">
              <Dropdown className="filter">
                  <Dropdown.Toggle className="icon" variant='white' id="dropdown-basic">
                  <i className="bi bi-three-dots" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
             </Dropdown>
                <div className="card-body pb-0">
                  <h5 className="card-title">Hostel Absent<span>| Details</span></h5> 
                
                  <BarChartHome/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ********************************** */}
        <div className="col-lg-4">
          <div className="card">
            <Dropdown className="filter">
              <Dropdown.Toggle className="icon" variant='white' id="dropdown-basic">
              <i className="bi bi-three-dots" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
           </Dropdown>
            <div className="card-body">
              <h5 className="card-title">Recent Activity <span>| Today</span></h5>
              <div className="activity">
                <div className="activity-item d-flex">
                  <div className="activite-label">32 min</div>
                  <i className="bi bi-circle-fill activity-badge text-success align-self-start" />
                  <div className="activity-content">
                    Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
                  </div>
                </div>
                <div className="activity-item d-flex">
                  <div className="activite-label">56 min</div>
                  <i className="bi bi-circle-fill activity-badge text-danger align-self-start" />
                  <div className="activity-content">
                    Voluptatem blanditiis blanditiis eveniet
                  </div>
                </div>
                <div className="activity-item d-flex">
                  <div className="activite-label">2 hrs</div>
                  <i className="bi bi-circle-fill activity-badge text-primary align-self-start" />
                  <div className="activity-content">
                    Voluptates corrupti molestias voluptatem
                  </div>
                </div>
                <div className="activity-item d-flex">
                  <div className="activite-label">1 day</div>
                  <i className="bi bi-circle-fill activity-badge text-info align-self-start" />
                  <div className="activity-content">
                    Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
                  </div>
                </div>
                <div className="activity-item d-flex">
                  <div className="activite-label">2 days</div>
                  <i className="bi bi-circle-fill activity-badge text-warning align-self-start" />
                  <div className="activity-content">
                    Est sit eum reiciendis exercitationem
                  </div>
                </div>
                <div className="activity-item d-flex">
                  <div className="activite-label">4 weeks</div>
                  <i className="bi bi-circle-fill activity-badge text-muted align-self-start" />
                  <div className="activity-content">
                    Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
          <Dropdown className="filter">
                  <Dropdown.Toggle className="icon" variant='white' id="dropdown-basic">
                  <i className="bi bi-three-dots" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
             </Dropdown>
            <div className="card-body pb-0">
              <h5 className="card-title">Company &amp; Lists <span>| Today</span></h5>
              <div className="news">
                <div className="post-item clearfix">
                  <img src="img/news-1.jpg" alt />
                  <h4><a href="#">Shanthi Garments</a></h4>
                  <p>Sit recusandae non aspernatur laboriosam. Quia enim eligendi sed ut harum...</p>
                </div>
                <div className="post-item clearfix">
                  <img src="img/news-2.jpg" alt />
                  <h4><a href="#">Tirupur Collars</a></h4>
                  <p>Illo nemo neqdries werona nande...</p>
                </div>
                <div className="post-item clearfix">
                  <img src="img/news-3.jpg" alt />
                  <h4><a href="#">Annai Knittings</a></h4>
                  <p>Fugiat voluptas vero eaque accusantium eos.  totam...</p>
                </div>
                <div className="post-item clearfix">
                  <img src="img/news-4.jpg" alt />
                  <h4><a href="#">S M Compacting</a></h4>
                  <p>Qui enim quia optio. Eligendi aut asperiores enim repellendusvel rerum cuder...</p>
                </div>
                <div className="post-item clearfix">
                  <img src="img/news-5.jpg" alt />
                  <h4><a href="#">A to Z Cotton Centre</a></h4>
                  <p>Odit  Atque cupiditate libero beatae dignissimos eius...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

</div>

    </>
  )
}

export default Main