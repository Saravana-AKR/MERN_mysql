import React from 'react'

const CreateEmployee = () => {
  return (
    <>
          <div class="modal fade" id="modalDialogScrollable" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                  <div class="modal-content bg-info-subtle text-dark">
                    <div class="modal-header">
                      <h5 class="modal-title">Add Employee</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" >
                      <form >
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="input-block mb-3">
                                    <label htmlFor="" className="col-form-label">
                                        FirstName <span className='text-danger'>*</span>
                                    </label>
                                    
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                 <div className="input-block mb-3">
                                    <label htmlFor="" className="col-form-label">
                                        FirstName <span className='text-danger'>*</span>
                                    </label>
                                    
                                    <input type="text" name="" id="" className="form-control" />
                                </div>
                            </div>
                            <div className="col-sm-6"></div>
                            <div className="col-sm-6"></div>
                            <div className="col-sm-6"></div>
                            <div className="col-sm-6"></div>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary text-light">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
      
    </>
  )
}

export default CreateEmployee