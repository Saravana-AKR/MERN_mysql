import express from 'express';
const router = express.Router();

import {
    createDistricts,
    getAllDistricts,
    getDistricts,
    updateDistricts,
    deleteDistricts
       }
    from '../controllers/DistrictController.js';


    router.get('/api/crm/district', getAllDistricts);
    router.post('/api/crm/district', createDistricts);
    router.get('/api/crm/district/:id', getDistricts);
    router.patch('/api/crm/district/:id', updateDistricts);
    router.delete('/api/crm/district/:id', deleteDistricts);

export default router;