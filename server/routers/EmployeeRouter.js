// import { Router } from 'express';
import express from 'express';
const router = express.Router();

import {getAllRegistration,createRegistration,getUserRegistration,updateRegistration,deleteRegistration} from '../controllers/employeesController.js';

// import {getAllEmployees,createEmployee,getEmployee,updateEmployee,deleteEmployee} from '../controllers/employeesController.js';

// router.route('/').get(getAllEmployees).post(createEmployee);
// router.route('/:id').get(getEmployee).patch(updateEmployee).delete(deleteEmployee);



router.get('/api/crm/registration',getAllRegistration);
router.post('/api/crm/registration',createRegistration);
router.get('/api/crm/registration/:id',getUserRegistration);
router.patch('/api/crm/registration/:id',updateRegistration);
router.delete('/api/crm/registration/:id',deleteRegistration);




export default router;