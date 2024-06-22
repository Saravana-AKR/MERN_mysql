import React from 'react'
import { Form, Link } from 'react-router-dom'
// import customFetch from '../../utils/customFetch'; 



// const data = await customFetch.get('/test');
// console.log(data);

  


const UserRights = () => {
  return (
    <>
            <main id="main" className="main" style={{height:"85vh"}}>

<div className="pagetitle">
  <h1>UserRights</h1>
  <nav>
    <ol className="breadcrumb py-3">
      <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
      <li className="breadcrumb-item active">User-Rights</li>
    </ol>
  </nav>
</div>

    <section className="section">
      <div className="row">
        <div className="col-lg-12">

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Rights</h5>
                          
              <Form method="get" action="/slc/hotels">
                  <select name="sort">
                    <option value="price">Price</option>
                    <option value="stars">Stars</option>
                    <option value="distance">Distance</option>
                  </select>

                  <fieldset>
                    <legend>Star Rating</legend>
                    <label>
                      <input type="radio" name="stars" value="5" />{" "}
                      ★★★★★
                    </label>
                    <label>
                      <input type="radio" name="stars" value="4" /> ★★★★
                    </label>
                    <label>
                      <input type="radio" name="stars" value="3" /> ★★★
                    </label>
                    <label>
                      <input type="radio" name="stars" value="2" /> ★★
                    </label>
                    <label>
                      <input type="radio" name="stars" value="1" /> ★
                    </label>
                  </fieldset>

                  <fieldset>
                    <legend>Amenities</legend>
                    <label>
                      <input
                        type="checkbox"
                        name="amenities"
                        value="pool"
                      />
                      Pool
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="amenities"
                        value="exercise"
                      />
                      Exercise Room
                    </label>
                  </fieldset>
                <button type="submit">Search</button>
              </Form>
                

            </div>
          </div>

        </div>

       

      </div>
    </section>

    </main>
    </>
  )
}

export default UserRights