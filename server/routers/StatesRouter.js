import express from 'express';
const router = express.Router();



import {
    createStates,
    getAllStates,
    getStates,
    updateStates,
    deleteStates
       }
    from '../controllers/StatesController.js';







router.get('/api/crm/states', getAllStates);
router.post('/api/crm/states', createStates);
router.get('/api/crm/states/:id', getStates);
router.patch('/api/crm/states/:id', updateStates);
router.delete('/api/crm/states/:id', deleteStates);

export default router;