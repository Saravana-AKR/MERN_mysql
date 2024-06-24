import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Department = () => {

  useEffect(() => {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
      throw new Error("Browser does not support notifications");
    }
  }, []);

  const requestPermission = () => {
    // Request permission (Promise-based)
    Notification.requestPermission().then((status) => {
      console.log(status);

      if (status === 'granted') {
        new Notification("Test", {
          body: "Hey, this is a test notification",
          icon: "./imgs/notification.png",
        });
      }
    });
  };


  return (
    <>
     <main id="main" class="main" style={{height:"85vh"}}>

<div class="pagetitle">
  <h1>Department</h1>
  <nav>
    <ol class="breadcrumb py-3">
      <li class="breadcrumb-item"><Link to='/portal'>Home</Link></li>
      <li class="breadcrumb-item active">Department</li>
    </ol>
  </nav>
</div>

    <section class="section">
      <div class="row">
        <div class="col-lg-12">

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">department</h5>
                   
                    
              <button id="notify" onClick={requestPermission}>
        Show Notification
      </button>
        
            

            </div>
          </div>

        </div>

       

      </div>
    </section>

    </main>
    
    </>
  )
}

export default Department