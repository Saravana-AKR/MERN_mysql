import React from 'react'
import { Link } from 'react-router-dom'


const Settlement = () => {
  return (
    <>
    
    <main id="main" class="main" style={{height:"85vh"}}>

<div class="pagetitle">
  <h1>Settlement</h1>
  <nav>
    <ol class="breadcrumb py-3">
      <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
      <li class="breadcrumb-item active">Settlement</li>
    </ol>
  </nav>
</div>

    <section class="section">
      <div class="row">
        <div class="col-lg-12">

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Settlement</h5>

        
            

            </div>
          </div>

        </div>

       

      </div>
    </section>

    </main>
    </>
  )
}

export default Settlement