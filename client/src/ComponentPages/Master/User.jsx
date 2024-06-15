import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
  return (
    <>
      <main id="main" class="main" style={{height:"85vh"}}>

          <div class="pagetitle">
            <h1>Users</h1>
            <nav>
              <ol class="breadcrumb py-3">
                <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                <li class="breadcrumb-item active">Users</li>
              </ol>
            </nav>
          </div>

              <section class="section">
                <div class="row">
                  <div class="col-lg-12">

                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Admin</h5>

                        <ul class="nav nav-tabs nav-tabs-bordered px-5 ms-5" id="borderedTab" role="tablist">
                          <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#bordered-home" type="button" role="tab" aria-controls="home" aria-selected="true">Admin</button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#bordered-profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Super User</button>
                          </li>
                          <li class="nav-item" role="presentation">
                            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#bordered-contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Manager</button>
                          </li>
                        </ul>
                          <div class="tab-content pt-2" id="borderedTabContent">
                            <div class="tab-pane fade show active" id="bordered-home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row">
                             <div className="col-lg-6">
                            <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                          
                           <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                           <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                            <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                          
                           
                           <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                           <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                           <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                           <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                            </div>
                            <div className="col-lg-6">
                            <p>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </p>
                           <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                           <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                           <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                           <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                            <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                           <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                           <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                           <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                           <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                            <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                           <h6>
                           Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
                           </h6>
                           
                            </div>
                             </div>
                            </div>
                            <div class="tab-pane fade" id="bordered-profile" role="tabpanel" aria-labelledby="profile-tab">
                              Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. Accusantium distinctio omnis et atque fugiat. Itaque doloremque aliquid sint quasi quia distinctio similique. Voluptate nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta.
                            </div>
                            <div class="tab-pane fade" id="bordered-contact" role="tabpanel" aria-labelledby="contact-tab">
                              Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
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

export default User