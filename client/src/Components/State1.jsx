import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


const State1 = () => {

    const [formData, setFormData] = useState({

    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (
    <>

    <div className="div">
   
    </div>

      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>
      
      <div className="modal">
      <Modal show={show} onHide={handleClose}>
        <Modal closeButton>
          <Modal.Title>create User</Modal.Title>
        </Modal>
        <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Label>password</Form.Label>
                <Form.Control type="email" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlInput1">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="email" placeholder="Password_2" />
          </Form.Group>
       </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    
    </>
  )
}

export default State1