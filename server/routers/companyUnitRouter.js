import express from 'express';
const router = express.Router();


import {
	createCompanyUnit,
    getAllCompanyUnit,
    getCompanyUnit,
    updateCompanyUnit,
    deleteCompanyUnit
} from '../controllers/CompanyUnitController.js';

import { authenticateUser } from '../middleware/authMiddleware.js';





router.get('/api/crm/companyunit', getAllCompanyUnit);
router.post('/api/crm/companyunit', createCompanyUnit);
router.get('/api/crm/companyunit/:id', getCompanyUnit);
router.patch('/api/crm/companyunit/:id', updateCompanyUnit);
router.delete('/api/crm/companyunit/:id', deleteCompanyUnit);


export default router;