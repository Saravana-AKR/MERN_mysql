import express from 'express';
const router = express.Router();











router.get('/api/crm/companyunit', getAllCompanyUnit);
router.post('/api/crm/companyunit', createCompanyUnit);
router.get('/api/crm/companyunit/:id', getCompanyUnit);
router.patch('/api/crm/companyunit/:id', updateCompanyUnit);
router.delete('/api/crm/companyunit/:id', deleteCompanyUnit);